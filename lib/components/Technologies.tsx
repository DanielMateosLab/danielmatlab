import ListItem from "./ListItem"

export default function Technologies() {
  return (
    <article>
      <h2>Technologies</h2>
      <div>
        <ListItem>
          Languages: Typescript, Python, Javascript, HTML5, CSS3.
        </ListItem>
        <ListItem>
          Frameworks: React, Next.js, Express, Apollo, Jest, Flask, SQLAlchemy,
          Pytest, Emotion, Bootstrap, Material-UI.
        </ListItem>
        <ListItem>Databases: MongoDB, PostgreSQL.</ListItem>
        <ListItem>API "Patterns": REST, GraphQL.</ListItem>
        <ListItem>Other: Linux, Docker, Node, Git</ListItem>
      </div>
    </article>
  )
}
