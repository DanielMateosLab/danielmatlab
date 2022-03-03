import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify/lib"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"
import { GITHUB_USER } from "./constants"

export default async function getHtmlFromReadme(repo: string) {
  const markdown = await fetchMarkdownFromGithub(repo)

  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown)

  return String(html)
}

const fetchMarkdownFromGithub = (repo: string) =>
  // Markdown is returned encoded in base64 in the content property
  fetch(getApiURI(repo))
    .then((res) => res.json())
    .then((body) => Buffer.from(body.content, "base64"))

const getApiURI = (repo: string) =>
  `https://api.github.com/repos/${GITHUB_USER}/${repo}/readme`
