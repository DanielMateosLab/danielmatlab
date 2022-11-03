import { useRouter } from "next/router"
import React, { Fragment, useEffect, useMemo, useState } from "react"
import Availability from "../lib/components/Availability"
import Contact from "../lib/components/Contact"
import CvHeader from "../lib/components/CvHeader"
import Education from "../lib/components/Education"
import Experience from "../lib/components/Experience"
import Introduction from "../lib/components/Introduction"
import Languages from "../lib/components/Languages"
import Technologies from "../lib/components/Technologies"
import { darkGray, gray } from "../styles/constants"

export default function Cv() {
  const router = useRouter()
  const withProfilePicture = router.query.profilePicture
  const [isBigScreen, setIsBigScreen] = useState(false)

  const Content = useMemo(() => {
    let items = [
      <Introduction />,
      <Technologies />,
      <Languages />,
      <Availability />,
      <Education />,
      <Experience />,
      <Contact />,
    ].map((item, i) => <Fragment key={i}>{item}</Fragment>)
    return isBigScreen ? splitElementsInTwoColumns(items) : items
  }, [isBigScreen])

  function splitElementsInTwoColumns(items: JSX.Element[]) {
    const splitElements = items.reduce(
      (acc, item, i) =>
        i % 2 === 0
          ? { ...acc, even: [...acc.even, item] }
          : { ...acc, odd: [...acc.odd, item] },
      { odd: [] as JSX.Element[], even: [] as JSX.Element[] }
    )
    const itemsInTwoColumns = [
      <div className="column" key="even">
        {splitElements.even}
      </div>,
      <div className="column" key="odd">
        {splitElements.odd}
      </div>,
    ]
    return itemsInTwoColumns
  }

  useEffect(() => {
    const isBigMQ = window.matchMedia("(min-width: 768px)")
    const handleMedia = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsBigScreen(e.matches)

    handleMedia(isBigMQ)
    isBigMQ.addEventListener("change", handleMedia)
    return () => isBigMQ.removeEventListener("change", handleMedia)
  }, [])

  return (
    <>
      <div className="cv-root">
        <CvHeader />

        <main className="content">{Content}</main>
      </div>

      <style jsx>
        {`
          .content {
            max-width: 80%;
            margin: auto;
            margin-bottom: 3rem;
          }
          .content :global(article) {
            margin-bottom: ${withProfilePicture ? "1.5rem" : "2.5rem"};
          }
          @media (min-width: 768px) {
            .content {
              display: flex;
              gap: 3rem;
            }
            .content > :global(div) {
              width: 50%;
            }
          }
        `}
      </style>

      <style global jsx>
        {`
          body {
            font-size: ${withProfilePicture ? "18px" : "20px"};
          }
          .cv-root {
            background: white;
          }
          .cv-root h2 {
            color: ${gray};
            text-transform: uppercase;
            font-size: 1.2rem;
          }
          .cv-root h2,
          .cv-root p {
            margin-top: 0;
            margin-bottom: 0.5rem;
          }

          .list-item {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
          }
          .spaced-list > :not(:last-child) {
            margin-bottom: 1rem;
          }

          .secondary-text {
            font-size: 0.9rem;
            color: ${darkGray};
          }
          .thin-text {
            font-weight: 300;
          }
        `}
      </style>
    </>
  )
}
