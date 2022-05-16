import * as puppeteer from "puppeteer"

async function printPdf() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  // Print without profile picture
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" })
  await page.pdf({
    format: "A4",
    printBackground: true,
    omitBackground: false,
    scale: 0.77,
    path: "./daniel_mateos_labrador.pdf",
  })

  // Print with profile picture
  await page.goto("http://localhost:3000?profilePicture=True", {
    waitUntil: "networkidle0",
  })
  await page.pdf({
    format: "A4",
    printBackground: true,
    omitBackground: false,
    scale: 0.77,
    path: "./daniel_mateos_labrador_wp.pdf",
  })

  await browser.close()
}

;(async () => {
  const pdf = await printPdf()
})()
