// Walks public/images/portfolio/ recursively and re-encodes every photo as a
// web-optimized JPEG. Resizes anything wider than MAX_WIDTH, then runs it
// through mozjpeg at JPEG_QUALITY for ~90%+ size reduction with no visible
// quality loss. Overwrites originals in place — keep a backup of raw photos
// elsewhere before running.
//
// Usage:  npm run optimize

import sharp from 'sharp';
import { readdir, stat, rename, unlink, access } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';

const PORTFOLIO_DIR = './public/images/portfolio';
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const SUPPORTED_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.heic', '.tiff'];

async function dirExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function getAllImages(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllImages(fullPath));
    } else if (SUPPORTED_EXT.includes(extname(entry.name).toLowerCase())) {
      // Skip our own temp files in case a previous run crashed
      if (entry.name.startsWith('_tmp_')) continue;
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const stats = await stat(filePath);
  const originalSize = stats.size;

  const metadata = await sharp(filePath).metadata();

  let pipeline = sharp(filePath).rotate(); // honor EXIF orientation
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
  }

  // Always output .jpg — change the extension if the input was something else
  const newFileName = basename(filePath, extname(filePath)) + '.jpg';
  const finalPath = join(dirname(filePath), newFileName);
  const tempPath = join(dirname(filePath), '_tmp_' + newFileName);

  await pipeline
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(tempPath);

  const newStats = await stat(tempPath);
  const newSize = newStats.size;

  // Replace original (delete original first so rename can't collide if extensions match)
  await unlink(filePath);
  await rename(tempPath, finalPath);

  return { originalSize, newSize, finalPath };
}

async function main() {
  if (!(await dirExists(PORTFOLIO_DIR))) {
    console.log(`No portfolio directory yet — create ${PORTFOLIO_DIR}/ and drop photos in there.`);
    return;
  }

  console.log(`Scanning ${PORTFOLIO_DIR} ...`);
  const images = await getAllImages(PORTFOLIO_DIR);
  if (images.length === 0) {
    console.log('No images found. Drop some photos into the portfolio folder and run this again.');
    return;
  }
  console.log(`Found ${images.length} image(s)\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let processed = 0;

  for (const img of images) {
    try {
      const result = await optimizeImage(img);
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      processed++;
      const shortPath = result.finalPath.replace(/\\/g, '/').replace('./public/images/portfolio/', '');
      const savings = ((1 - result.newSize / result.originalSize) * 100).toFixed(1);
      const beforeMB = (result.originalSize / 1024 / 1024).toFixed(2);
      const afterKB = (result.newSize / 1024).toFixed(0);
      console.log(`[${processed}/${images.length}] ${shortPath}: ${beforeMB}MB → ${afterKB}KB (${savings}% smaller)`);
    } catch (err) {
      console.error(`Error processing ${img}: ${err.message}`);
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Processed: ${processed}/${images.length} images`);
  console.log(`Before:    ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
  console.log(`After:     ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  if (totalOriginal > 0) {
    console.log(`Saved:     ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(1)} MB (${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
