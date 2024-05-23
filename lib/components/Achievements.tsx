import ListItem from "./ListItem"

export default function Achievements() {
  return (
    <article>
      <h2>Achievements</h2>
      <div className="thin-text">
        <ListItem>
          Took care of the whole development process for a client website, from
          initial talks and requirements collection to final deployment,
          feedback, monitoring and maintenance.
        </ListItem>
        <ListItem>
          Managed a team of junior developers, mentoring them, assigning tasks,
          reviewing code and providing feedback.
        </ListItem>
        <ListItem>
          Wrote unit and integration tests for an in-production react web app
          previously untested.
        </ListItem>
      </div>
    </article>
  )
}
