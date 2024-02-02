import { createMarkdownRenderer } from "@modules/markdown"
import AnswerMessage from "./components/Answer/AnswerMessage"
import SourceList from "./components/Source/SourceList"
import TitleBlock from "./components/TitleBlock"
import UserMessage from "./components/UserMessage"
import { useEffect, useRef } from "react"
import 'highlight.js/styles/atom-one-light.css'
import AccordionCom from "@components/copilotAccordion/Accordion"
import AnswerMessageFooter from "@components/Answer/AnswerMessageFooter"
import InputTextear from "@components/Input"
import { v4 as uuidV4 } from "uuid"
import useChatHistroyStore, { chatHistroyListDefault } from "@stores/modules/chatHistroy"
const App = () => {
  const { chatHistroyList, setChatHistroyList, updateChatHistroyListLast } = useChatHistroyStore()
  const uuid = uuidV4()
  // const sourceList: Source[] = [
  //   {
  //     id: 1,
  //     name: "SpaceX",
  //     avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
  //     desc: " which was previously owned which was pre"
  //   },
  //   {
  //     id: 2,
  //     name: "SpaceX",
  //     avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
  //     desc: " which was previously owned which was pre"
  //   },
  //   {
  //     id: 3,
  //     name: "SpaceX",
  //     avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
  //     desc: " which was previously owned previously previously"
  //   },
  //   {
  //     id: 4,
  //     name: "SpaceX",
  //     avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
  //     desc: " which was previously owned which was pre which was pre"
  //   },
  //   {
  //     id: 5,
  //     name: "SpaceX",
  //     avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
  //     desc: " which was previously owned which was pre which was pre"
  //   },
  //   {
  //     id: 6,
  //     name: "SpaceX",
  //     avatar: "https://www.google.com/s2/favicons?sz=128&domain=twitter.com",
  //     desc: " which was previously owned which was pre which was pre"
  //   },
  // ]
  // const [firstSourceList, setFirstSourceList] = useState<Source[]>(sourceList.slice(0, 3))
  const containerRef = useRef<HTMLDivElement>(null)
  //   const AnswerMessageT = `
  //   # A demo of \`react-markdown\`
  //   [![NPM version](https://img.shields.io/npm/v/react-markdown.svg)](https://www.npmjs.com/package/react-markdown)

  // | name | age | desc |
  // | ---- | ---- | ---- |
  // |   张三  |   12  |   这是张三   |
  // |   李四  |   23   |   这是李四      |


  // 👉 Changes are re-rendered as you type.

  // 👈 Try writing some markdown on the left.

  // ## Overview

  // * Follows [CommonMark](https://commonmark.org)
  // * Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
  // * Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
  // * Lets you define your own components (to render \`MyHeading\` instead of \`'h1'\`)
  // * Has a lot of plugins

  // ## Contents

  // Here is an example of a plugin in action
  // ([\`remark-toc\`](https://github.com/remarkjs/remark-toc)).
  // **This section is replaced by an actual table of contents**.

  // ## Syntax highlighting

  // Here is an example of a plugin to highlight code:
  // [\`rehype-highlight\`](https://github.com/rehypejs/rehype-highlight).

  // \`\`\`js
  // import React from 'react'
  // import ReactDOM from 'react-dom'
  // import Markdown from 'react-markdown'
  // import rehypeHighlight from 'rehype-highlight'

  // const markdown = \`
  // # Your markdown here
  // \`

  // ReactDOM.render(
  //   <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>,
  //   document.querySelector('#content')
  // )
  // \`\`\`
  //   `
  // const [AnswerMessageRenderStr, setAnswerMessageRenderStr] = useState('')
  let mdRender: (val: string) => string = () => ''

  async function streamWrite(reader: ReadableStreamDefaultReader<Uint8Array>) {
    const textDecoder = new TextDecoder();
    let result = true;
    let output = "";
    while (result) {
      try {
        const { done, value } = await reader.read();
        if (done) {
          result = false;
        }
        const chunkText = textDecoder.decode(value);
        output += chunkText;
        const AnswerMessageMar = mdRender(output)
        updateChatHistroyListLast({
          sourceList: [],
          AnswerMessage: AnswerMessageMar,
          uuid,
          loadingAnswer: false,
        })

      } catch (error) {
        console.error(error);
        break
      }
    }
  }

  useEffect(() => {
    createMarkdownRenderer().then(mdRenders => {
      mdRender = mdRenders

    })
  }, [containerRef.current])
  function requestQa(inputVal: string) {
    fetch('http://ekbapi.opencsg.com:9090/api/search_ask', {
      method: 'POST',
      body: JSON.stringify({
        conversation_uuid: uuid,
        ask_type: "single_file",
        llm_type: "1",
        question: inputVal
      })
    }).then(response => {
      const reader = response!.body!.getReader();
      streamWrite(reader)
    })
  }
  const clickSourceMore = () => {
    // setFirstSourceList(sourceList)
  }
  const inputSendMessage = (val: string) => {
    setChatHistroyList(chatHistroyListDefault)
    requestQa(val)
  }

  return (<>
    <div ref={containerRef} className="flex justify-center flex-col items-center">
      {
        chatHistroyList.map(item => (<div className="bg-[#fcfcf9] p-5 w-[1100px] py-10 border-b" key={item.uuid}>
          <UserMessage message="SpaceX mysterious Boeing 737" />
          <AccordionCom />
          <TitleBlock icon="material-symbols:format-align-right-rounded" text="Source" />
          <SourceList sourceList={item.sourceList} clickSourceMore={clickSourceMore} />
          <TitleBlock icon="material-symbols:format-align-left" text="Answer" />
          <AnswerMessage message={item.AnswerMessage} />
          <AnswerMessageFooter />
        </div>))
      }

      <InputTextear inputSendMessage={inputSendMessage} />
    </div>
  </>)
}

export default App
