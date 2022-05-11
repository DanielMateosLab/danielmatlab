import Availability from "../lib/components/Availability"
import Contact from "../lib/components/Contact"
import CvHeader from "../lib/components/CvHeader"
import DownloadPDF from "../lib/components/DownloadPDF"
import Education from "../lib/components/Education"
import Experience from "../lib/components/Experience"
import Introduction from "../lib/components/Introduction"
import Languages from "../lib/components/Languages"
import Technologies from "../lib/components/Technologies"
import { darkGray, gray } from "../styles/constants"

export default function Cv() {
  return (
    <>
      <div className="cv-root">
        <CvHeader />

        <main className="content">
          <Introduction />
          <Technologies />
          <Languages />
          <Availability />
          <Experience />
          <div>
            <Education />
            <Contact />
          </div>

          <DownloadPDF />
        </main>
      </div>

      <style jsx>
        {`
          .content {
            max-width: 80%;
            margin: auto;
            margin-bottom: 3rem;
          }
          .content :global(article) {
            margin-bottom: 1.5rem;
          }
          @media (min-width: 768px) {
            .content {
              display: grid;
              grid-template-columns: 1fr 1fr;
              column-gap: 3rem;
            }
          }
        `}
      </style>

      <style global jsx>
        {`
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
