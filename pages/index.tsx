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
    title: "Proficient Git & GitHub",
    description: `Handle version control with the CLI using atomic commits, branches,
      pull requests, issues, etc.`,
  },
  {
    title: "Strong with the basics",
    description: `Thousands of hours spent working with HTML, CSS and Javascript.`,
  },
  {
    title: "Typescript",
    description:
      "Boosted productivity thanks to the type safety typescript provides.",
  },
  {
    title: "My favourite full stack",
    description: `Love creating MVPs with full functionality
      using to MongoDB, Node, NextJS and React.`,
  },
  {
    title: "... and much more!",
    description: `Docker, Express, GraphQL... Hmmm! It has been a lot of time since this
      journey started, I've used a lot of interesting technologies, and I'm ready
      to learn the one you need!`,
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
