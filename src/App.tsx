import { createMarkdownRenderer } from "@modules/markdown"
import AnswerMessage from "./components/Answer/AnswerMessage"
import SourceList from "./components/Source/SourceList"
import TitleBlock from "./components/TitleBlock"
import UserMessage from "./components/UserMessage"
import { Source } from "./types/source"
import { useState } from "react"
import 'highlight.js/styles/atom-one-light.css'
import AccordionCom from "@components/copilotAccordion/Accordion"
import AnswerMessageFooter from "@components/Answer/AnswerMessageFooter"
const App = () => {
  const sourceList: Source[] = [
    {
      name: "SpaceX",
      avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
      desc: " which was previously owned which was pre"
    },
    {
      name: "SpaceX",
      avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
      desc: " which was previously owned which was pre"
    },
    {
      name: "SpaceX",
      avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
      desc: " which was previously owned previously previously"
    },
    {
      name: "SpaceX",
      avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
      desc: " which was previously owned which was pre which was pre"
    },
    {
      name: "SpaceX",
      avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
      desc: " which was previously owned which was pre which was pre"
    },
    {
      name: "SpaceX",
      avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
      desc: " which was previously owned which was pre which was pre"
    },
  ]
  const [firstSourceList, setFirstSourceList] = useState<Source[]>(sourceList.slice(0, 3))

  const AnswerMessageT = `
  # A demo of \`react-markdown\`
  [![NPM version](https://img.shields.io/npm/v/react-markdown.svg)](https://www.npmjs.com/package/react-markdown)

| name | age | desc |
| ---- | ---- | ---- |
|   张三  |   12  |   这是张三   |
|   李四  |   23   |   这是李四      |


👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
* Lets you define your own components (to render \`MyHeading\` instead of \`'h1'\`)
* Has a lot of plugins

## Contents

Here is an example of a plugin in action
([\`remark-toc\`](https://github.com/remarkjs/remark-toc)).
**This section is replaced by an actual table of contents**.

## Syntax highlighting

Here is an example of a plugin to highlight code:
[\`rehype-highlight\`](https://github.com/rehypejs/rehype-highlight).

\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

const markdown = \`
# Your markdown here
\`

ReactDOM.render(
  <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>,
  document.querySelector('#content')
)
\`\`\`
  `
  const [AnswerMessageRenderStr, setAnswerMessageRenderStr] = useState('')
  createMarkdownRenderer().then(mdRender => {
    const AnswerMessageMar = mdRender(AnswerMessageT)
    setAnswerMessageRenderStr(AnswerMessageMar)
  })

  const clickSourceMore = () => {
    setFirstSourceList(sourceList)
  }

  return (<>
    <div className="flex justify-center flex-col items-center">
      <div className="bg-[#fcfcf9] p-5 w-[1100px] py-10 border-b">
        <UserMessage message="SpaceX mysterious Boeing 737" />
        <AccordionCom />
        <TitleBlock icon="material-symbols:format-align-right-rounded" text="Source" />
        <SourceList sourceList={firstSourceList} clickSourceMore={clickSourceMore} />
        <TitleBlock icon="material-symbols:format-align-left" text="Answer" />
        <AnswerMessage message={AnswerMessageRenderStr} />
        <AnswerMessageFooter />
      </div>
      <div className="bg-[#fcfcf9] p-5 w-[1100px] py-10 border-b">
        <UserMessage message="SpaceX mysterious Boeing 737" />
        <AccordionCom />
        <TitleBlock icon="material-symbols:format-align-right-rounded" text="Source" />
        <SourceList sourceList={firstSourceList} clickSourceMore={clickSourceMore} />
        <TitleBlock icon="material-symbols:format-align-left" text="Answer" />
        <AnswerMessage message={AnswerMessageRenderStr} />
        <AnswerMessageFooter />
      </div>
    </div>
  </>)
}

export default App
