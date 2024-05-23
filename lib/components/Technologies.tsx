import ListItem from "./ListItem"

export default function Technologies() {
  return (
    <article>
      <h2>Technologies</h2>
      <div>
        <ListItem>
          Languages: Typescript, Python, Javascript, C, HTML5, CSS3, SCSS.
        </ListItem>
        <ListItem>
          Frameworks: React, Next.js, Express, Apollo, Jest, Prisma,
          TailwindCSS, Shadcn, Radix, Material-UI, Primereact, CSS in JS, Flask,
          SQLAlchemy, Pytest.
        </ListItem>
        <ListItem>Databases: MongoDB, PostgreSQL.</ListItem>
        <ListItem>API "Patterns": REST, GraphQL, RPC.</ListItem>
        <ListItem>Other: AWS, OpenAI APIs, Linux, Docker, Node, Git.</ListItem>
      </div>
    </article>
  )
}
