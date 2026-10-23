import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true,
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0', timeout: 30000 });

await page.screenshot({ path: 'shot-hero.png' });
const targets = [
  ['work', 'shot-projects.png'],
  ['experience', 'shot-experience.png'],
  ['domains', 'shot-skills.png'],
  ['research', 'shot-research.png'],
  ['research', 'shot-publications.png'],
  ['education', 'shot-education.png'],
  ['contact', 'shot-contact.png'],
];
for (const [id, filename] of targets) {
  const el = await page.$(`#${id}`);
  if (el) {
    await el.scrollIntoView();
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: filename });
  }
}
await page.goto('http://localhost:8080/eesa/', { waitUntil: 'networkidle0' });
await page.screenshot({ path: 'shot-eesa-page.png', fullPage: true });
await browser.close();
console.log('screenshots saved');
