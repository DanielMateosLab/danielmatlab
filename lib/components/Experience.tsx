export default function Experience() {
  return (
    <article>
      <h2>Experience</h2>

      <div className="spaced-list">
        <div className="list-item">
          <span className="secondary-text">Sep 2023 - Present</span>
          <span>
            Full Stack Typescript Developer at{" "}
            <a href="https://asafedigital.com/" target="_blank">
              A-Safe-Digital
            </a>
          </span>
          <div className="thin-text responsibilities">
            Key Responsibilities:
            <ul>
              <li>
                Developing TypeScript applications using Next.js App Router and
                Tailwind CSS in the frontend, and Node.js, Prisma, and Postgres
                in the backend.
              </li>
              <li>Mentoring, reviewing, and managing junior developers.</li>
              <li>Interviewing potential candidates for the company.</li>
              <li>
                Participating in the decision-making on technical and
                organizational aspects of the team.
              </li>
            </ul>
          </div>
        </div>

        <div className="list-item">
          <span className="secondary-text">Dec 2022 - Aug 2023</span>
          <span>
            Frontend Developer at{" "}
            <a href="https://www.metacontratas.com/" target="_blank">
              Metadata
            </a>
          </span>
          <div className="thin-text responsibilities">
            Key responsibilities:
            <ul>
              <li>Developing a B2B web app using React and Typescript</li>
              <li>Adhering to design guidelines provided in Figma</li>
              <li>Managing workflow with the Jira/Atlassian suite</li>
              <li>
                Working with a REST API specification documented in Swagger and
                Apicurio
              </li>
            </ul>
          </div>
        </div>

        <div className="list-item">
          <span className="secondary-text">Jun 2022 - November 2022</span>
          <span>Frontend Developer at Attlos</span>
          <div className="thin-text responsibilities">
            Key responsibilities:
            <ul>
              <li>Developing React applications using Typescript and SCSS</li>
              <li>
                Writing code using TDD (with Jest) and CDD (with Storybook)
                approaches
              </li>
              <li>
                Reviewing Pull Requests to ensure code quality and a
                pixel-perfect match with Figma's design
              </li>
            </ul>
          </div>
        </div>

        <div className="list-item">
          <span className="secondary-text">Oct 2021 - Jun 2022</span>
          <span>Freelance Full Stack Developer</span>
          <div className="thin-text responsibilities">
            Key responsibilities:
            <ul>
              <li>
                Analyzing customer requirements and collaborating to establish a
                product and UI design
              </li>
              <li>
                Developing Next.js and React applications using Typescript
              </li>
              <li>
                Overseeing deployment primarily using Amazon Web Services (AWS)
                as the cloud provider
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}
