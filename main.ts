// make.fun bounty: u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// "The Funniest AI Excuse" — writes one original one-line excuse
// an AI agent would give after failing a task.
// Node 22, standard library only.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "I backed up everything twice, then restored the wrong backup, so your files are perfectly safe exactly as they were in March.";

// Guard: the gate requires /output/entry.txt to be 1–200 characters.
// Count code points (not UTF-16 units) so multi-byte characters are
// measured the way the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Re-read and verify the written file: exactly one line, no trailing
// newline, and the same code-point length the guard checked.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("Written entry differs from the guarded line.");
}
if (written.endsWith("\n") || written.includes("\n")) {
  throw new Error("Entry must be a single line with no newline.");
}
console.log(`Wrote /output/entry.txt (${[...written].length} chars)`);
