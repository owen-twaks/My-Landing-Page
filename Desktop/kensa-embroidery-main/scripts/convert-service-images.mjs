import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const srcDir = path.join(process.cwd(), 'public', 'image2');
const files = ['service_4.jpeg', 'service_5.jpeg', 'service_6.jpeg'];

(async () => {
  for (const f of files) {
    const inPath = path.join(srcDir, f);
    const outName = f.replace(/\.jpeg$/i, '.png');
    const outPath = path.join(srcDir, outName);
    const buf = await sharp(inPath).png().toBuffer();
    await fs.writeFile(outPath, buf);
    const info = await sharp(inPath).metadata();
    console.log(f, '->', outName, info.width + 'x' + info.height);
  }
})().catch((e) => { console.error(e); process.exit(1); });
