// Everyday Things, Two Lines: a queue, explained to a 10-year-old.
// Line 1: one vivid sentence, one analogy. Line 2: what the analogy
// maps, and what it honestly leaves out. The program writes the two
// lines to /output/entry.txt, and refuses to write them if they ever
// fall outside the gate (1-400 UTF-8 characters, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

const lines: string[] = [
  "A queue is a human train where everyone is the engine, shuffling forward one sigh at a time.",
  "It maps the slow shuffle forward, but leaves out that trains never sigh, push, or dash off for the toilet.",
];

const text = lines.join("\n");
if (text.length < 1 || text.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${text.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(text);
