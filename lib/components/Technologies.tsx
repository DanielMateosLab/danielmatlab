import ListItem from "./ListItem"

export default function Technologies() {
  return (
    <article>
      <h2>Technologies</h2>
      <div>
        <ListItem>
          Languages: Typescript, Python, Javascript, HTML5, CSS3, SCSS.
        </ListItem>
        <ListItem>
          Frameworks: React, Next.js, Express, Apollo, Jest, Flask, SQLAlchemy,
          Pytest, TailwindCSS, Material-UI, Primereact, CSS in JS.
        </ListItem>
        <ListItem>Databases: MongoDB, PostgreSQL.</ListItem>
        <ListItem>API "Patterns": REST, GraphQL.</ListItem>
        <ListItem>Other: AWS, Linux, Docker, Node, Git.</ListItem>
      </div>
    </article>
  )
}
