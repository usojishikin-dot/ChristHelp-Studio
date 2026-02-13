/**
 * Image optimization script
 * Compresses portfolio images and creates WebP versions
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PORTFOLIO_DIR = './public/images/portfolio';
const HERO_DIR = './public/images/hero';
const MAX_WIDTH = 800;
const JPEG_QUALITY = 75;
const WEBP_QUALITY = 72;

async function optimizeImage(inputPath) {
    const ext = path.extname(inputPath).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') return;

    const filename = path.basename(inputPath);
    const dir = path.dirname(inputPath);

    try {
        const inputBuffer = fs.readFileSync(inputPath);
        const originalSize = inputBuffer.length;

        // Resize and compress JPEG
        const jpegBuffer = await sharp(inputBuffer)
            .resize(MAX_WIDTH, undefined, { withoutEnlargement: true })
            .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
            .toBuffer();

        fs.writeFileSync(inputPath, jpegBuffer);

        // Create WebP version
        const webpPath = path.join(dir, filename.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
        const webpBuffer = await sharp(inputBuffer)
            .resize(MAX_WIDTH, undefined, { withoutEnlargement: true })
            .webp({ quality: WEBP_QUALITY })
            .toBuffer();

        fs.writeFileSync(webpPath, webpBuffer);

        const savings = ((1 - jpegBuffer.length / originalSize) * 100).toFixed(0);
        const webpSavings = ((1 - webpBuffer.length / originalSize) * 100).toFixed(0);

        console.log(
            `  ${filename}: ${(originalSize / 1024).toFixed(0)}KB -> ${(jpegBuffer.length / 1024).toFixed(0)}KB (-${savings}%) | WebP: ${(webpBuffer.length / 1024).toFixed(0)}KB (-${webpSavings}%)`
        );
    } catch (err) {
        console.error(`  ERROR ${filename}: ${err.message}`);
    }
}

async function processDirectory(dir) {
    if (!fs.existsSync(dir)) {
        console.log(`Directory ${dir} not found, skipping.`);
        return;
    }

    const files = fs.readdirSync(dir)
        .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
        .map(f => path.join(dir, f));

    console.log(`\nProcessing ${dir} (${files.length} images)...`);

    for (const file of files) {
        await optimizeImage(file);
    }
}

async function main() {
    console.log('Image Optimization');
    console.log(`Max width: ${MAX_WIDTH}px | JPEG quality: ${JPEG_QUALITY} | WebP quality: ${WEBP_QUALITY}`);

    await processDirectory(PORTFOLIO_DIR);
    await processDirectory(HERO_DIR);

    console.log('\nDone.');
}

main();
