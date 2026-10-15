import { chromium } from 'playwright';

const sites = [
  {
    name: 'corporate-clothing',
    url: 'https://promoafrica.com/www.kensaembroidery.co.za/categories/corporate-clothing',
    heading: 'Corporate Clothing',
    description: 'Corporate clothing and workwear ranges for branding your team.',
  },
  {
    name: 'notebooks',
    url: 'https://www.kmq.co.za/',
    heading: 'Notebooks & More',
    description: 'Quality notebooks, stationery and promotional items.',
  },
  {
    name: 'hoodies-tshirts',
    url: 'https://captivity.co.za/',
    heading: 'Hoodies & T-Shirts',
    description: 'Custom hoodies and t-shirts for teams and events.',
  },
  {
    name: 'caps-hats',
    url: 'https://twentyfour.store/',
    heading: 'Caps & Hats',
    description: 'Branded caps and hats for your team.',
  },
  {
    name: 'diaries-bottles',
    url: 'https://www.tradeonlygifts.co.za/?spm=a2ty_o01.29997173.0.0.77915171iNp3ho',
    heading: 'Diaries, Bottles & More',
    description: 'Diaries, bottles and promotional gifts for your business.',
  },
  {
    name: 'workwear-ppe',
    url: 'https://barron.com/dashboard/transact/orders/BAR-SO014166',
    heading: 'Workwear & PPE Supply',
    description: 'Workwear and PPE supplies for safety and compliance.',
  },
];

async function captureScreenshot(site) {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage();

  // Set a mobile-like viewport for consistent screenshots
  await page.setViewportSize({ width: 1200, height: 800 });

  try {
    console.log(`Capturing: ${site.name} (${site.url})...`);
    await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Wait a bit for any lazy-loaded content
    await page.waitForTimeout(2000);

    // Take screenshot
    const screenshotPath = `public/images/cat-${site.name}.jpeg`;
    await page.screenshot({
      path: screenshotPath,
      fullPage: false,
      type: 'jpeg',
      quality: 85,
    });

    console.log(`✓ Saved: ${screenshotPath}`);

    // Get page title for reference
    const title = await page.title();
    console.log(`  Title: ${title}`);

    // Get a brief description of what's on the page
    const text = await page.evaluate(() => {
      const main = document.querySelector('main, .content, article, .main-content, #content');
      const bodyText = document.body.innerText || '';
      // Get first 200 chars of meaningful text
      const clean = bodyText.replace(/\s+/g, ' ').trim().substring(0, 200);
      return clean;
    });
    console.log(`  Content preview: ${text.substring(0, 100)}...`);

    return { name: site.name, title, success: true };
  } catch (error) {
    console.error(`✗ Failed ${site.name}: ${error}`);
    return { name: site.name, error: String(error), success: false };
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log('Starting screenshot capture for supplier sites...\n');

  const results = [];
  for (const site of sites) {
    const result = await captureScreenshot(site);
    results.push(result);
    console.log('');
  }

  console.log('\n=== Summary ===');
  const success = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`✓ Successful: ${success.length}/${sites.length}`);
  if (failed.length > 0) {
    console.log(`✗ Failed: ${failed.length}`);
    failed.forEach(f => console.log(`  - ${f.name}: ${f.error}`));
  }
}

main().catch(console.error);
