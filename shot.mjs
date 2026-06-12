import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true,
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0', timeout: 30000 });

await page.screenshot({ path: 'shot-hero.png' });
for (const id of ['experience', 'projects', 'skills', 'publications', 'education', 'contact']) {
  await page.evaluate((sel) => document.getElementById(sel)?.scrollIntoView(), id);
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `shot-${id}.png` });
}
await browser.close();
console.log('screenshots saved');
