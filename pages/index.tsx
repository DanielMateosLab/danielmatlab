import { GetStaticProps } from "next"
import getHtmlFromReadme from "../lib/getHtmlFromReadme"

interface Props {
  homeContent: string
}
export default function Home({ homeContent }: Props) {
  return (
    <div>
      <main dangerouslySetInnerHTML={{ __html: homeContent }} />

      <style global jsx>
        {`
          main {
            padding: 1rem;
          }

          @media (min-width: 796px) {
            main: {
              max-width: 796px;
              margin: auto;
            }
          }
        `}
      </style>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const homeContent = await getHtmlFromReadme("DanielMateosLab")

  return {
    props: {
      homeContent,
    },
  }
}
