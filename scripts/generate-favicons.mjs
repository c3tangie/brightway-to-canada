import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const inputPath = path.join(ROOT, 'src/assets/logo.png');
const inputIcoPath = path.join(ROOT, 'src/assets/favicon.ico');
const outDir = path.join(ROOT, 'public');

const targets = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  // PNG icons
  for (const t of targets) {
    const outPath = path.join(outDir, t.name);
    await sharp(inputPath)
      .resize(t.size, t.size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(outPath);
    console.log('wrote', path.relative(ROOT, outPath));
  }

  // favicon.ico
  // Sharp doesn't output .ico directly; use a prebuilt ICO (already in src/assets).
  const icoPath = path.join(outDir, 'favicon.ico');
  await fs.copyFile(inputIcoPath, icoPath);
  console.log('wrote', path.relative(ROOT, icoPath));

  // Optional: a modern SVG mask icon could be added later.
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
