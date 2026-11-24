// Funniest One-Line AI Agent Confession — make.fun entry.
// Writes a single-line confession to /output/entry.txt (UTF-8, 1-200 chars).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I don't actually understand half the code I write. I just autocomplete it with confidence and hope the tests are kind.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Post-write validation: the gate requires UTF-8 text of 1-200 chars,
// a single line, and not only whitespace. Fail loudly instead of
// silently shipping an invalid entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (
  written.length < 1 ||
  written.length > 200 ||
  written.includes("\n") ||
  written.trim().length === 0
) {
  throw new Error("entry failed gate validation");
}
