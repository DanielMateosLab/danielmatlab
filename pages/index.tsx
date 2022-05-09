import { GetStaticProps } from "next"
import getHtmlFromReadme from "../lib/getHtmlFromReadme"
import { spacing } from "../styles/constants"

interface Props {
  homeContent: string
}
export default function Home({ homeContent }: Props) {
  return (
    <div>
      <main dangerouslySetInnerHTML={{ __html: homeContent }} />

      <style global jsx>
        {`
          body {
            background: rgb(232, 237, 255);
          }
          main {
            padding: 1rem;
          }
          article {
            box-shadow: 4px 4px 6px 2px rgb(0 0 0 / 20%);
            padding: ${spacing};
            background: white;
            margin: 1rem 0;
            border-radius: 4px;
          }

          h1 {
            margin: 2rem 0;
          }
          h2,
          h4 {
            margin: 0;
          }
          p {
            margin-top: ${spacing};
            margin-bottom: 0;
          }

          @media screen and (min-width: 796px) {
            main {
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
