import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Mateos Labrador</title>
        <meta name="description" content="CV page" />
      </Head>

      <main>
        <h1>Skills</h1>

        <h2>Basic CLI usage</h2>
        <p>
          Navigate directories. Create, move, rename and delete files and
          folders. Create links. Use grep. Use control and redirection
          operators.
        </p>

        <h2>Proficent in Git and GitHub</h2>
        <p>
          Handle version control with the CLI using atomic commits, branches,
          pull requests, etc.
        </p>
      </main>
    </div>
  );
}
