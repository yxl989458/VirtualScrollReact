import {
  frontmatterReg,
  markdownHashLinkReg,
  markdownNoBaseUrlLinkReg,
  tsConfigSite,
  tsConfigSiteRef
} from '@constants'
import { HLJSPlugin } from 'highlight.js';

export async function createMarkdownRenderer() {

  const [
    { default: markdownIt }, { default: hljs }, { default: javascript }, { default: json }, { default: markdownTable }, { default: copyButtonPlugin },
    { default: c }, { default: php }, { default: typescript }, { default: markdown }, { default: css }, { default: python }, { default: shell },
    { default: yaml }, { default: dockerfile }, { default: ini }, { default: properties }, { default: xml }, { default: ruby }, { default: go },
    { default: csharp }, { default: cpp }, { default: rust },

  ] =
    await Promise.all([
      import(/* webpackChunkName: 'markdown-it' */ 'markdown-it'),
      import('highlight.js/lib/core'),
      import('highlight.js/lib/languages/javascript'),
      import('highlight.js/lib/languages/json'),
      import('markdown-it-multimd-table'),
      import('@modules/highlightjs-copy'),
      import('highlight.js/lib/languages/c'),
      import('highlight.js/lib/languages/php'),
      import('highlight.js/lib/languages/typescript'),
      import('highlight.js/lib/languages/markdown'),
      import('highlight.js/lib/languages/css'),
      import('highlight.js/lib/languages/python'),
      import('highlight.js/lib/languages/shell'),
      import('highlight.js/lib/languages/yaml'),
      import('highlight.js/lib/languages/dockerfile'),
      import('highlight.js/lib/languages/ini'),
      import('highlight.js/lib/languages/properties'),
      import('highlight.js/lib/languages/xml'),
      import('highlight.js/lib/languages/ruby'),
      import('highlight.js/lib/languages/go'),
      import('highlight.js/lib/languages/c#'),
      import('highlight.js/lib/languages/cpp'),
      import('highlight.js/lib/languages/rust'),
    ])
  hljs.registerLanguage('json', json)
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('c', c)
  hljs.registerLanguage('php', php)
  hljs.registerLanguage('typescript', typescript)
  hljs.registerLanguage('markdown', markdown)
  hljs.registerLanguage('css', css)
  hljs.registerLanguage('python', python)
  hljs.registerLanguage('shell', shell)
  hljs.registerLanguage('yaml', yaml)
  hljs.registerLanguage('dockerfile', dockerfile)
  hljs.registerLanguage('ini', ini)
  hljs.registerLanguage('properties', properties)
  hljs.registerLanguage('xml', xml)
  hljs.registerLanguage('ruby', ruby)
  hljs.registerLanguage('go', go),
    hljs.registerLanguage('c#', csharp)
  hljs.registerLanguage('c++', cpp)
  hljs.registerLanguage('rust', rust)
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
