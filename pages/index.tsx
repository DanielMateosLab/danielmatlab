import { GetStaticProps } from "next"
import { useEffect, useState } from "react"

export default function Home() {
  const [content, setContent] = useState("")

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/DanielMateosLab/DanielMateosLab/readme",
      {
        headers: [["Accept", "application/vnd.github.v3.html"]],
      }
    )
      .then((value) => value.text())
      .then((value) => setContent(value))
  }, [])

  return (
    <div>
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}
