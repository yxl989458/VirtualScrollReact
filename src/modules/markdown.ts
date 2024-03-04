import {
  frontmatterReg,
  markdownHashLinkReg,
  markdownNoBaseUrlLinkReg,
  tsConfigSite,
  tsConfigSiteRef
} from '@constants'
import { Source } from '@/types/source';
import { HLJSPlugin } from 'highlight.js';

export async function createMarkdownRenderer() {

  const [
    { default: markdownIt }, { default: hljs }, { default: javascript }, { default: json }, { default: markdownTable }, { default: copyButtonPlugin }, { default: mila },
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
      import("markdown-it-link-attributes"),
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
  md.use(mila, {
    attrs: {
      target: "_blank",
      rel: "noopener",
      class: "bg-[#f0f1f2] inline-block mr-1 px-3 rounded-full text-[#8b90a3]",
    },
  })

  return (content: string, sourceList: Source[]) => {
    content = content
      // remove formatter
      .replace(frontmatterReg, '')
      .replace(/\[\[([cC])itation/g, "[citation")
      .replace(/[cC]itation:(\d+)]]/g, "citation:$1]")
      .replace(/\[\[([cC]itation:\d+)]](?!])/g, `[$1]`)
      .replace(/\[[cC]itation:(\d+)]/g, (val) => {
        if (!sourceList.length) return ''
        const index = Number(val.split(':')[1].split(']')[0])
        return `[${index}](${sourceList[index - 1]?.url})`
      })
      // hash link add base url
      .replace(markdownHashLinkReg, (all, hash) => all.replace(hash, `${tsConfigSiteRef}${hash}`))
      // add base url
      .replace(markdownNoBaseUrlLinkReg, (all, link) => all.replace(link, `${tsConfigSite}${link}`))
    return md.render(content)
  }
}
