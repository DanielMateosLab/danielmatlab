import Head from "next/head";
import styles from "../styles/Home.module.css";

interface Skill {
  title: string;
  description: string;
}
const skills: Skill[] = [
  {
    title: "Confortable CLI usage",
    description: `Navigate directories. Create, move, rename and delete files and
      folders. Create links. Use grep. Use control and redirection
      operators.`,
  },
  {
    title: "Proficient Git",
    description: `Handle version control with the CLI using atomic commits, branches,
      pull requests, etc.`,
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Mateos Labrador</title>
        <meta name="description" content="CV page" />
      </Head>

      <main>
        <article>
          <h1>Skills</h1>
          {skills.map((skill) => (
            <div key={skill.title}>
              <h2> {skill.title} </h2>
              <p> {skill.description} </p>
            </div>
          ))}
        </article>
      </main>
    </div>
  );
}
