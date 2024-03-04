import { createMarkdownRenderer } from '@modules/markdown'
import { Source } from '@/types/source'
export async function usePropertyRemoteMarkdown(): Promise<{ mdRender: (content: string, soureList?: Source[]) => string }> {
  const mdRender = await createMarkdownRenderer()
  return {
    mdRender
  }
}
