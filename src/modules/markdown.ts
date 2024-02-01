import {
  frontmatterReg,
  markdownHashLinkReg,
  markdownNoBaseUrlLinkReg,
  tsConfigSite,
  tsConfigSiteRef
} from '@constants'
import { HLJSPlugin } from 'highlight.js';

export async function createMarkdownRenderer() {
  
  const [{ default: markdownIt }, { default: hljs }, { default: javascript }, { default: json }, { default: markdownTable },{default:copyButtonPlugin}] =
    await Promise.all([
      import(/* webpackChunkName: 'markdown-it' */ 'markdown-it'),
      import('highlight.js/lib/core'),
      import('highlight.js/lib/languages/javascript'),
      import('highlight.js/lib/languages/json'),
      import('markdown-it-multimd-table'),
      import('@modules/highlightjs-copy')
    ])
  hljs.registerLanguage('json', json) 
  hljs.registerLanguage('javascript', javascript)
  hljs.addPlugin(
    copyButtonPlugin as HLJSPlugin
  );
  hljs.highlightAll();
  const md = markdownIt({
    html: true,
    xhtmlOut: true,
    breaks: true,
    linkify: true,
    typographer: true,
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, {
            language: lang
          }).value
        } catch (__) {
          return ''
        }
      }
      return ''
    }
  })
  md.use(markdownTable, {
    multiline: true,
    rowspan: true,
    headerless: true,
    multibody: true,
    autolabel: true,
  })

  return (content: string) => {
    content = content
      // remove formatter
      .replace(frontmatterReg, '')
      // hash link add base url
      .replace(markdownHashLinkReg, (all, hash) => all.replace(hash, `${tsConfigSiteRef}${hash}`))
      // add base url
      .replace(markdownNoBaseUrlLinkReg, (all, link) => all.replace(link, `${tsConfigSite}${link}`))
    return md.render(content)
  }
}
