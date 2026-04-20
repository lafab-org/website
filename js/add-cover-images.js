import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const REALISATIONS = "src/realisations";

let updated = 0;
let skipped = 0;

for (const entry of readdirSync(REALISATIONS, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const indexPath = join(REALISATIONS, entry.name, "index.md");
  let raw;
  try { raw = readFileSync(indexPath, "utf8"); } catch { continue; }

  if (raw.includes("\ncover:")) { skipped++; continue; }

  const match = raw.match(/!\[\]\(([^)]+)\)/);
  if (!match) { skipped++; continue; }

  const cover = match[1];
  const updated_raw = raw.replace(/^---\n/, `---\ncover: "${cover}"\n`);
  writeFileSync(indexPath, updated_raw);
  updated++;
}

console.log(`Updated: ${updated}, skipped: ${skipped}`);
