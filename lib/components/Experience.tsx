export default function Experience() {
  return (
    <article>
      <h2>Experience</h2>

      <div className="spaced-list">
        <div className="list-item">
          <span className="secondary-text">Dec 2022 - Present</span>
          <span>
            Frontend Developer at{" "}
            <a href="https://www.metacontratas.com/" target="_blank">
              Metadata
            </a>
          </span>
          <div className="thin-text responsibilities">
            I am currently working as a frontend developer using Typescript and
            React.
          </div>
        </div>

        <div className="list-item">
          <span className="secondary-text">Jun 2022 - November 2022</span>
          <span>Frontend Developer at Attlos</span>
          <div className="thin-text responsibilities">
            Key responsibilities:
            <ul>
              <li>Develop React applications using Typescript and SCSS.</li>
              <li>
                Write code using TDD (with jest) and CDD (with Storybook)
                approaches.
              </li>
              <li>
                Review Pull Requests to ensure code quality and a pixel perfect
                match with Figma's design.
              </li>
              <li>Version control using Git.</li>
            </ul>
          </div>
        </div>

        <div className="list-item">
          <span className="secondary-text">Oct 2021 - May 2022</span>
          <span>
            Freelance Full Stack Developer developing websites such as{" "}
            <a href="https://fada-var.fr/" target="_blank">
              https://fada-var.fr
            </a>
            .
          </span>
        </div>
      </div>
    </article>
  )
}
