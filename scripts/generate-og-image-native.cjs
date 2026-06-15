'use strict';

/**
 * Pure Node.js PNG generator — no external packages required.
 * Creates a 1200×630 branded OG image using built-in zlib.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const W = 1200;
const H = 630;

// ─── helper: write a PNG chunk ──────────────────────────────────────────────
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crcInput = Buffer.concat([typeBytes, data]);
  const crcVal = Buffer.alloc(4);
  crcVal.writeUInt32BE(crc32(crcInput), 0);
  return Buffer.concat([len, typeBytes, data, crcVal]);
}

// ─── colour helpers ───────────────────────────────────────────────────────────
function lerp(a, b, t) { return Math.round(a + (b - a) * t); }

// Gradient: top-left #1e3a8a → top-right #7c3aed → blend down to #0f172a
function pixelRGB(x, y) {
  const tx = x / (W - 1);
  const ty = y / (H - 1);
  const t = tx * 0.6 + ty * 0.4;         // diagonal bias

  // palette
  const c0 = [30, 58, 138];    // #1e3a8a
  const c1 = [124, 58, 237];   // #7c3aed
  const dark = [15, 23, 42];   // #0f172a

  const base = [lerp(c0[0], c1[0], t), lerp(c0[1], c1[1], t), lerp(c0[2], c1[2], t)];
  // darken towards bottom
  const r = lerp(base[0], dark[0], ty * 0.3);
  const g = lerp(base[1], dark[1], ty * 0.3);
  const b = lerp(base[2], dark[2], ty * 0.3);
  return [r, g, b];
}

// Draw a semi-transparent circle (returns alpha-blended RGB)
function circle(x, y, cx, cy, r, cr, cg, cb, alpha, base) {
  const dx = x - cx, dy = y - cy;
  const d = Math.sqrt(dx * dx + dy * dy);
  if (d > r) return base;
  const a = alpha * (1 - d / r);   // soft edge
  return [
    Math.round(base[0] * (1 - a) + cr * a),
    Math.round(base[1] * (1 - a) + cg * a),
    Math.round(base[2] * (1 - a) + cb * a),
  ];
}

// Draw a rectangle (returns alpha-blended RGB or original)
function rect(x, y, rx, ry, rw, rh, cr, cg, cb, alpha, base) {
  if (x < rx || x >= rx + rw || y < ry || y >= ry + rh) return base;
  return [
    Math.round(base[0] * (1 - alpha) + cr * alpha),
    Math.round(base[1] * (1 - alpha) + cg * alpha),
    Math.round(base[2] * (1 - alpha) + cb * alpha),
  ];
}

// ─── build raw pixel data ─────────────────────────────────────────────────────
console.log('Generating 1200×630 OG image...');

// Pre-compute all pixels row by row
// Each PNG row: 1 filter byte + W*3 colour bytes
const rowSize = 1 + W * 3;
const raw = Buffer.alloc(H * rowSize);

for (let y = 0; y < H; y++) {
  raw[y * rowSize] = 0; // filter type: None

  for (let x = 0; x < W; x++) {
    let [r, g, b] = pixelRGB(x, y);

    // Decorative circle — top right, large, subtle
    [r, g, b] = circle(x, y, W - 60, -80, 380, 255, 255, 255, 0.06, [r, g, b]);
    // Decorative circle — bottom left
    [r, g, b] = circle(x, y, -40, H + 60, 300, 255, 255, 255, 0.04, [r, g, b]);
    // Small circle — mid right
    [r, g, b] = circle(x, y, W - 200, 200, 130, 255, 255, 255, 0.05, [r, g, b]);

    // Logo box — top left (56×56 at x=80, y=64)
    [r, g, b] = rect(x, y, 80, 64, 56, 56, 255, 255, 255, 0.2, [r, g, b]);
    // White square inside logo box (32×32 centred)
    [r, g, b] = rect(x, y, 92, 76, 32, 32, 255, 255, 255, 0.85, [r, g, b]);

    // Badge pill — top right (approx 200×36 at x=916, y=76)
    [r, g, b] = rect(x, y, 916, 76, 200, 36, 255, 255, 255, 0.15, [r, g, b]);
    // Green dot in badge (8×8 at x=930, y=90)
    [r, g, b] = circle(x, y, 934, 94, 6, 74, 222, 128, 0.9, [r, g, b]);

    // Stat card 1 (x=80, y=490, 145×88)
    [r, g, b] = rect(x, y, 80, 490, 145, 88, 255, 255, 255, 0.1, [r, g, b]);
    // Stat card 2
    [r, g, b] = rect(x, y, 249, 490, 165, 88, 255, 255, 255, 0.1, [r, g, b]);
    // Stat card 3
    [r, g, b] = rect(x, y, 438, 490, 145, 88, 255, 255, 255, 0.1, [r, g, b]);
    // Stat card 4
    [r, g, b] = rect(x, y, 607, 490, 120, 88, 255, 255, 255, 0.1, [r, g, b]);

    // Headline pill badge (x=80, y=280, 380×38)
    [r, g, b] = rect(x, y, 80, 280, 380, 38, 255, 255, 255, 0.12, [r, g, b]);

    // Headline underline accent (blue-300 bar under second headline line)
    [r, g, b] = rect(x, y, 80, 415, 520, 4, 147, 197, 253, 0.8, [r, g, b]);

    raw[y * rowSize + 1 + x * 3] = r;
    raw[y * rowSize + 1 + x * 3 + 1] = g;
    raw[y * rowSize + 1 + x * 3 + 2] = b;
  }
}

// ─── compress with zlib and build PNG ────────────────────────────────────────
const compressed = zlib.deflateSync(raw, { level: 6 });

const SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

const ihdrData = Buffer.alloc(13);
ihdrData.writeUInt32BE(W, 0);
ihdrData.writeUInt32BE(H, 4);
ihdrData[8] = 8;   // bit depth
ihdrData[9] = 2;   // colour type: RGB
ihdrData[10] = 0;  // compression
ihdrData[11] = 0;  // filter
ihdrData[12] = 0;  // interlace

const png = Buffer.concat([
  SIGNATURE,
  chunk('IHDR', ihdrData),
  chunk('IDAT', compressed),
  chunk('IEND', Buffer.alloc(0)),
]);

// ─── write files ─────────────────────────────────────────────────────────────
const publicDir = path.join(__dirname, '..', 'public');
const pngOut = path.join(publicDir, 'og-image.png');
const jpgOut = path.join(publicDir, 'og-image.jpg');

fs.writeFileSync(pngOut, png);
console.log('✓ Written: ' + pngOut + ' (' + (png.length / 1024).toFixed(1) + ' KB)');

// Write a copy as .jpg — browsers and social crawlers accept PNG served as jpg
// when Content-Type is set correctly by the server. For static hosts that rely
// on extension, rename references in metadata to og-image.png.
fs.copyFileSync(pngOut, jpgOut);
console.log('✓ Copied:  ' + jpgOut);
console.log('Done. The file is a valid PNG (1200×630, blue-to-purple gradient brand image).');
console.log('Note: og-image.jpg is a PNG file with a .jpg extension.');
console.log('      On Vercel, static files use Content-Type by extension, so update');
console.log('      all og:image references from og-image.jpg to og-image.png for strict compliance.');
