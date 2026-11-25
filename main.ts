// The Internet in One Word — entry: "actually".
// One word for the whole internet: the pedant's correction, which is what
// the internet mostly is — one long "well, actually", millions of strangers
// correcting each other about everything, forever.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const word = "actually";

// Gate guard: the entry must be one word, 1–30 UTF-8 characters, and not
// only whitespace. Fail loudly instead of writing an invalid entry.
if (word.length < 1 || word.length > 30 || word.trim() === "" || word.split(/\s+/).length !== 1) {
  throw new Error(`invalid entry word: ${JSON.stringify(word)}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
