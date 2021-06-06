import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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

      <main className={styles.container}>
        <article className={styles.page}>
          <header className={styles.gridContainer}>
            <div className={styles.profile}>
              <Image
                alt="picture of Daniel"
                src="/profile.jpeg"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div>
              <h1 className={styles.greeting}>Hi! Here is Dani</h1>
              <p>
                After thousands of hours learning web development, it is the
                moment to get my first job!
                <br />
                In this webpage I have built you can have a glance at my
                personal information, my skills and my portfolio.
              </p>
              <p>
                If you have any doubt, don't hesitate to{" "}
                <a href="#">contact me</a>!
              </p>
            </div>
          </header>
        </article>

        <article className={styles.page}>
          <h1>About me</h1>

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
