import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import os from 'os';

const imagesDir = './public/images';
const images = [
  'cat-corporate-clothing',
  'cat-notebooks',
  'cat-hoodies-tshirts',
  'cat-caps-hats',
  'cat-diaries-bottles',
  'cat-workwear-ppe',
];

async function optimizeImage(name) {
  const jpegPath = path.join(imagesDir, `${name}.jpeg`);
  const webpPath = path.join(imagesDir, `${name}.webp`);
  const tempJpeg = path.join(os.tmpdir(), `opt-${Date.now()}-${name}.jpeg`);
  const tempWebp = path.join(os.tmpdir(), `opt-${Date.now()}-${name}.webp`);

  console.log(`\nProcessing ${name}...`);

  try {
    const jpegStats = fs.statSync(jpegPath);
    console.log(`  JPEG original: ${(jpegStats.size / 1024).toFixed(1)} KB`);

    // Optimize JPEG
    await sharp(jpegPath)
      .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toFile(tempJpeg);

    fs.rmSync(jpegPath);
    fs.renameSync(tempJpeg, jpegPath);

    const newJpegStats = fs.statSync(jpegPath);
    console.log(`  JPEG optimized: ${(newJpegStats.size / 1024).toFixed(1)} KB (saved ${((jpegStats.size - newJpegStats.size) / jpegStats.size * 100).toFixed(0)}%)`);

    // Create WebP
    await sharp(jpegPath)
      .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(tempWebp);

    if (fs.existsSync(webpPath)) fs.rmSync(webpPath);
    fs.renameSync(tempWebp, webpPath);

    const webpStats = fs.statSync(webpPath);
    console.log(`  WebP created: ${(webpStats.size / 1024).toFixed(1)} KB (${Math.round((1 - webpStats.size / newJpegStats.size) * 100)}% smaller than JPEG)`);

    return true;
  } catch (error) {
    console.error(`  Error: ${error.message}`);
    if (fs.existsSync(tempJpeg)) fs.unlinkSync(tempJpeg);
    if (fs.existsSync(tempWebp)) fs.unlinkSync(tempWebp);
    return false;
  }
}

async function main() {
  console.log('Optimizing supplier screenshots...\n');

  let success = 0;
  let failed = 0;

  for (const name of images) {
    const result = await optimizeImage(name);
    if (result) success++;
    else failed++;
  }

  console.log(`\n=== Summary ===`);
  console.log(`✓ Processed: ${success}/${images.length}`);
  if (failed > 0) console.log(`✗ Failed: ${failed}`);
}

main().catch(console.error);
