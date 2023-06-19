import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Achievements from "../lib/components/Achievements"
import Availability from "../lib/components/Availability"
import Contact from "../lib/components/Contact"
import CvHeader from "../lib/components/CvHeader"
import Education from "../lib/components/Education"
import Experience from "../lib/components/Experience"
import HorizontalContainer from "../lib/components/HorizontalContainer"
import Languages from "../lib/components/Languages"
import Technologies from "../lib/components/Technologies"
import { darkGray, gray } from "../styles/constants"

enum ScreenSizes {
  Small = "Small",
  Big = "Big",
}

export default function Cv() {
  const router = useRouter()
  const withProfilePicture = router.query.profilePicture
  const [screenSize, setScreenSize] = useState<ScreenSizes | undefined>(
    undefined
  )
  const Items = {
    [ScreenSizes.Small]: (
      <>
        <Experience />
        <Achievements />
        <Technologies />
        <Education />
        <Languages />
        <Availability />
        <Contact />
      </>
    ),
    [ScreenSizes.Big]: (
      <>
        <div className="column">
          <Experience />
          <Education />
          <Contact />
        </div>
        <div className="column">
          <Achievements />
          <Technologies />
          <Availability />
          <Languages />
        </div>
      </>
    ),
  }

  useEffect(() => {
    const isBigMQ = window.matchMedia("(min-width: 768px)")
    const handleMedia = (e: MediaQueryListEvent | MediaQueryList) =>
      setScreenSize(e.matches ? ScreenSizes.Big : ScreenSizes.Small)

    handleMedia(isBigMQ)
    isBigMQ.addEventListener("change", handleMedia)
    return () => isBigMQ.removeEventListener("change", handleMedia)
  }, [])

  return (
    <>
      <div className="cv-root">
        <CvHeader />
        <main>
          <HorizontalContainer className="content">
            {Items[screenSize || ScreenSizes.Big]}
          </HorizontalContainer>
        </main>
      </div>

      <style global jsx>
        {`
          body {
            font-size: 20px;
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
          .content {
            margin-bottom: 3rem;
            opacity: ${screenSize ? 1 : 0};
          }
          .content :global(article) {
            margin-bottom: ${withProfilePicture ? "1.5rem" : "2rem"};
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
    </>
  )
}
