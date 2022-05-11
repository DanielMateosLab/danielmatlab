import * as puppeteer from "puppeteer"

async function printPdf() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" })
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    omitBackground: false,
    scale: 0.77,
    path: "./daniel_mateos_labrador.pdf",
  })

  await browser.close()
  return pdf
}

;(async () => {
  const pdf = await printPdf()
})()
