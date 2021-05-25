import Head from "next/head";
import styles from "../styles/Home.module.css";

interface Skill {
  title: string;
  description: string;
}
const technologies: Skill[] = [
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
          <h1>Personal information</h1>
          <p>
            Hi! Here is Dani. I am looking for a job as a web developer so I
            have made this website to show you why I am the developer you are
            looking for.
          </p>
          <ul>
            <li>Age: born in 1996</li>
            <li>Nationality: Spanish</li>
            <li>Gender: male</li>
            <li>Languages: native Spanish, fluent in English</li>
            <li>
              Location: Algatocín, Málaga. Travelling and moving disposition
            </li>
            <li>B Driving license</li>
          </ul>
        </article>
        <article>
          <h1>Technologies</h1>
          {technologies.map((skill) => (
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
