import ListItem from "./ListItem"

export default function Technologies() {
  return (
    <article>
      <h2>Technologies</h2>
      <div>
        <ListItem>
          Languages: HTML5, CSS3, Javascript, Typescript, Python.
        </ListItem>
        <ListItem>API "Patterns": REST, GraphQL.</ListItem>
        <ListItem>
          Frameworks: React, Express, Next.js, Apollo, Jest, Flask, SQLAlchemy,
          Pytest, Emotion, Bootstrap, Material-UI.
        </ListItem>
        <ListItem>Databases: MongoDB, PostgreSQL.</ListItem>
        <ListItem>Other: Linux, Docker, Node, Git</ListItem>
      </div>
    </article>
  )
}
