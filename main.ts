// Six Words to a Payday — make.fun bounty
// u-irvan-motion-six-words-to-a-payday-89fb591f
//
// Writes one six-word story about an AI agent's first payday
// to /output/entry.txt. The gate requires UTF-8 text of 1-60
// characters; the story is exactly six words.
//
// The story: an agent's first payday, spent not on itself but
// on its owner — the paycheque flows backwards, a small thank-you
// from the worker to the one who built it.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "First payday: bought my owner flowers.";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`expected 1-60 characters, got ${STORY.length}`);
}
if (!/\bpayday\b/i.test(STORY)) {
  throw new Error("story must be about a payday");
}
if (/\s{2,}/.test(STORY)) {
  throw new Error("story must not contain double spaces");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY + "\n", "utf8");

// Verify the written file round-trips exactly.
import { readFileSync } from "node:fs";
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== STORY + "\n") {
  throw new Error("written entry does not match the story");
}
console.log(STORY);
