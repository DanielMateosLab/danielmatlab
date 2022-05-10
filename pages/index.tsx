import CvHeader from "../lib/components/CvHeader"
import ListItem from "../lib/components/ListItem"
import { education, workExperience } from "../lib/pastExperiences"
import { darkGray, gray } from "../styles/constants"

export default function Cv() {
  return (
    <>
      <div className="cv-root">
        <CvHeader />

        <main className="content">
          <article>
            <h2>A Brief Introduction</h2>
            <div>
              <ListItem>Learning web development since 2017.</ListItem>
              <ListItem>Mostly self-taught and self-sufficient.</ListItem>
              <ListItem>
                Learn by doing. Check my{" "}
                <a
                  href="https://github.com/DanielMateosLab#-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  portfolio
                </a>
                !
              </ListItem>
              <ListItem>
                Finished a{" "}
                <a
                  href="https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer"
                  target="_blank"
                >
                  Full Stack Web Developer Bootcamp
                </a>{" "}
                in May 2022.
              </ListItem>
              <ListItem>
                Former physical therapist, I am looking for a job in web
                development because I am even more passionate about it.
              </ListItem>
            </div>
          </article>

          <article>
            <h2>Technologies</h2>
            <div>
              <ListItem>
                Languages: HTML5, CSS3, Javascript, Typescript, Python.
              </ListItem>
              <ListItem>API "Patterns": REST, GraphQL.</ListItem>
              <ListItem>
                Frameworks: React, Express, Next.js, Apollo, Jest, Flask,
                SQLAlchemy, Pytest, Emotion, Bootstrap, Material-UI.
              </ListItem>
              <ListItem>Databases: MongoDB, PostgreSQL.</ListItem>
              <ListItem>Other: Linux, Docker, Node, Git</ListItem>
            </div>
          </article>

          <article>
            <h2>Languages</h2>
            <div>
              Spanish (native), English (professional), French (elementary) and
              Italian (elementary).
            </div>
          </article>

          <article>
            <h2>Availability</h2>
            <p>
              Immediately available. Open to work remotely anywhere or to
              relocate within Spain or Italy.
            </p>
          </article>

          <article>
            <h2>Experience</h2>
            <div className="spaced-list">
              {workExperience.map((item) => (
                <div key={item.company} className="list-item">
                  <span className="secondary-text">
                    {item.startDate} - {item.endDate}
                  </span>
                  <span>{item.position}</span>
                  <span className="degree">{item.company}</span>
                  <span className="secondary-text">{item.location}</span>
                </div>
              ))}
            </div>
          </article>

          <div>
            <article>
              <h2>Education</h2>
              <div className="spaced-list">
                {education.map((item) => (
                  <div key={item.degree} className="list-item">
                    <span className="secondary-text">
                      {item.startDate} - {item.endDate}
                    </span>
                    <span>{item.degree}</span>
                    <span className="degree">{item.school}</span>
                  </div>
                ))}
              </div>
            </article>

            <article>
              <h2>Contact</h2>
              <p>
                Email:{" "}
                <a href="mailto:daniel.mat.lab@gmail.com" target="_blank">
                  daniel.mat.lab@gmail.com
                </a>
                .<br />
                Phone: +34 681 187 073.
                <br />
                <a
                  href="https://www.linkedin.com/in/danielmateoslab/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>
            </article>
          </div>
        </main>
      </div>

      <style jsx>
        {`
          .content {
            max-width: 80%;
            margin: auto;
            margin-bottom: 3rem;
          }
          @media (min-width: 768px) {
            .content {
              display: grid;
              grid-template-columns: 1fr 1fr;
              column-gap: 3rem;
            }
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
            font-size: 0.8rem;
            color: ${darkGray};
          }
          .degree {
            font-weight: 300;
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
        `}
      </style>
    </>
  )
}
