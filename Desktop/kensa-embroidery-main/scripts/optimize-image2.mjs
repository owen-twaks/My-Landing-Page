import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const srcDir = path.join(process.cwd(), 'public', 'image2');
const files = ['service_4.png', 'service_5.png', 'service_6.png'];

(async () => {
  for (const f of files) {
    const inPath = path.join(srcDir, f);
    const outName = f.replace(/\.png$/i, '.webp');
    const outPath = path.join(srcDir, outName);
    if (!await fs.access(inPath).then(() => true).catch(() => false)) {
      console.warn('Skipping', f, '- not found');
      continue;
    }
    await sharp(inPath).webp({ quality: 85 }).toFile(outPath);
    const info = await sharp(inPath).metadata();
    console.log(f, '->', outName, info.width + 'x' + info.height);
  }
})().catch((e) => { console.error(e); process.exit(1); });
