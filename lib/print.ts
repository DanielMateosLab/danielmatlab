import * as puppeteer from "puppeteer"

const pdfSettings = {
  format: "A4",
  printBackground: true,
  omitBackground: false,
  scale: 0.77,
} as const
enum PrintVersion {
  WithPicture = "WithPicture",
  WithoutPicture = "WithoutPicture",
}
const outputPath = {
  [PrintVersion.WithPicture]: "./daniel_mateos_labrador_wp.pdf",
  [PrintVersion.WithoutPicture]: "./daniel_mateos_labrador.pdf",
}

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
    ...pdfSettings,
    path: outputPath[version],
  })
}

printPdf()
  .then(() => console.log("Done"))
  .catch((error) => console.error(error))
