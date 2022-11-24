export default function Experience() {
  return (
    <article>
      <h2>Experience</h2>

      <div className="spaced-list">
        <div className="list-item">
          <span className="secondary-text">Jun 2022 - November 2022</span>
          <span>
            Worked as Fronted Developer for{" "}
            <a href="https://attlos.com/" target="_blank">
              Attlos
            </a>
            .
          </span>
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
            Worked as a freelance Full Stack Developer developing websites such
            as{" "}
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
