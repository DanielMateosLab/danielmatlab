import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/globals.css"
import "../styles/texture.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Daniel Mateos Labrador</title>
        <meta name="description" content="Curriculum Vitae. Resume." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
