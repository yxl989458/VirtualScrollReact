import { createMarkdownRenderer } from '@modules/markdown'
export async function usePropertyRemoteMarkdown(): Promise<{ mdRender: (content: string) => string }> {
  const mdRender = await createMarkdownRenderer()
  return {
    mdRender
  }
}
