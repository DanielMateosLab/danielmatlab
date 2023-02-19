import ListItem from "./ListItem"

export default function Achievements() {
  return (
    <article>
      <h2>Achievements</h2>
      <div>
        <ListItem>
          Took care of the whole development process for a client website, from
          initial talks and requirements collection to final deployment,
          feedback, monitoring and maintenance.
        </ListItem>
        <ListItem>
          Mentored and reviewed the work of my coworkers in the frontend
          development team.
        </ListItem>
        <ListItem>
          Wrote unit tests for an in-production react web app previously
          untested.
        </ListItem>
        <ListItem>
          Created a react service to control properties of floating or fixed
          elements depending on their underlying elements using context,
          reducers and hooks.
        </ListItem>
        <ListItem>
          Created a react service to lazy-load images using context, reducers
          and hooks.
        </ListItem>
        <ListItem>
          Created a python algorithm that uses graph theory and backtracking to
          solve puzzles with brute force.
        </ListItem>
      </div>
    </article>
  )
}
