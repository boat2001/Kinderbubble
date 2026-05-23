/**
 * Moves images from public/assets/images into category subfolders with descriptive names.
 * Run: node client/scripts/reorganize-images.mjs
 * Dry run: node client/scripts/reorganize-images.mjs --dry-run
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../public/assets/images');
const DRY = process.argv.includes('--dry-run');

/** @type {Array<{original:string,category:string,newName:string}>} */
const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'image-manifest.json'), 'utf8')
);

const categories = ['learning', 'students', 'extra-curricular', 'facilities', 'others'];

function ensureUniqueName(dir, baseName) {
  let candidate = baseName;
  let n = 2;
  const ext = path.extname(baseName);
  const stem = baseName.slice(0, -ext.length);
  while (fs.existsSync(path.join(dir, candidate))) {
    candidate = `${stem}-${n}${ext}`;
    n += 1;
  }
  return candidate;
}

function main() {
  for (const cat of categories) {
    const d = path.join(ROOT, cat);
    if (!DRY && !fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  }

  const mapping = {};
  const errors = [];
  const imageExts = new Set(['.jpg', '.jpeg', '.png', '.webp']);
  const sourceFiles = fs
    .readdirSync(ROOT)
    .filter((name) => imageExts.has(path.extname(name).toLowerCase()));
  const manifestFiles = new Set(manifest.map((entry) => entry.original));

  for (const file of sourceFiles) {
    if (!manifestFiles.has(file)) errors.push(`Unmapped source file: ${file}`);
  }

  for (const entry of manifest) {
    const src = path.join(ROOT, entry.original);
    if (!fs.existsSync(src)) {
      errors.push(`Missing: ${entry.original}`);
      continue;
    }

    if (!categories.includes(entry.category)) {
      errors.push(`Bad category for ${entry.original}: ${entry.category}`);
      continue;
    }

    const destDir = path.join(ROOT, entry.category);
    let finalName = entry.newName.replace(/[^a-z0-9._-]+/gi, '-').replace(/-+/g, '-');

    finalName = ensureUniqueName(destDir, finalName);
    const dest = path.join(destDir, finalName);
    const webPath = `/assets/images/${entry.category}/${finalName}`;

    if (DRY) {
      console.log(`${entry.original} -> ${webPath}`);
    } else {
      fs.renameSync(src, dest);
    }

    mapping[entry.original] = webPath;
  }

  const mapPath = path.join(__dirname, 'image-path-mapping.json');
  if (!DRY) {
    fs.writeFileSync(mapPath, JSON.stringify(mapping, null, 2));
    if (fs.existsSync(path.join(ROOT, '_filelist.txt'))) fs.unlinkSync(path.join(ROOT, '_filelist.txt'));
  }

  console.log(`\nDone${DRY ? ' (dry run)' : ''}. Mapped ${Object.keys(mapping).length} files.`);
  if (errors.length) {
    console.error('Errors:', errors.join('\n'));
    process.exit(1);
  }
}

main();
