import type{ HLJSPlugin, HighlightResult } from "highlight.js";
import "./styles/highlightjs-copy.css"

class CopyButtonPlugin implements  HLJSPlugin{
  "after:highlightElement"({ el, text}:{ el: Element, result: HighlightResult, text: string}) {
    const button = Object.assign(document.createElement("button"), {
      className: "hljs-copy-button",
    });
  
    button.dataset.copied = "false";
    el.parentElement!.classList.add("hljs-copy-wrapper");
    el.parentElement!.appendChild(button);

    el.parentElement!.style.setProperty(
      "--hljs-theme-background",
      window.getComputedStyle(el).backgroundColor
    );
    button.onclick = function () {
      if (!navigator.clipboard) return;
      navigator.clipboard
        .writeText(text)
        .then(function () {
          button.dataset.copied = "true";
          setTimeout(() => {
            button.dataset.copied = "false";
          }, 800);
        })
    };
  }
}
export default new  CopyButtonPlugin
