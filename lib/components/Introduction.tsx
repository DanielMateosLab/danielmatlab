import ListItem from "./ListItem"

export default function Introduction() {
  return (
    <article>
      <h2>A Brief Introduction</h2>
      <div>
        <ListItem>Learning web development since 2017.</ListItem>
        <ListItem>Mostly self-taught and self-sufficient.</ListItem>
        <ListItem>
          I learn by doing. Check my{" "}
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
          Former physical therapist, I am looking for a job in web development
          because it motivates me much more.
        </ListItem>
      </div>
    </article>
  )
}
