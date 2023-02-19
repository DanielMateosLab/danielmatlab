import * as puppeteer from "puppeteer"

enum PrintVersion {
  WithPicture = "WithPicture",
  WithoutPicture = "WithoutPicture",
}

const pdfCommonSettings = {
  format: "A4",
  printBackground: true,
  omitBackground: false,
} as const
const pdfDynamicSettings = {
  [PrintVersion.WithPicture]: {
    path: "./daniel_mateos_labrador_wp.pdf",
    scale: 0.64,
  },
  [PrintVersion.WithoutPicture]: {
    path: "./daniel_mateos_labrador.pdf",
    scale: 0.66,
  },
} as const

async function printPdf() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await printVersion(PrintVersion.WithPicture, page)
  await printVersion(PrintVersion.WithoutPicture, page)

  await browser.close()
}

async function printVersion(version: PrintVersion, page: puppeteer.Page) {
  const queryParams =
    version === PrintVersion.WithPicture ? "?profilePicture=True" : ""
  const url = `http://localhost:3000${queryParams}`
  await page.goto(url, { waitUntil: "networkidle0" })
  await page.pdf({
    ...pdfCommonSettings,
    ...pdfDynamicSettings[version],
  })
}

printPdf()
  .then(() => console.log("Done"))
  .catch((error) => console.error(error))
