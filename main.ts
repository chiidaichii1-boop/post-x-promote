// main.ts — copies POST.json (the X post's address) into the output dir.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const post = readFileSync(join(repoDir, "POST.json"), "utf8");
// Make sure the file is valid JSON before handing it on, but copy it
// byte for byte so the post's address is exactly as recorded.
JSON.parse(post);
writeFileSync(join(outDir, "POST.json"), post);
console.log("Wrote POST.json to", outDir);
