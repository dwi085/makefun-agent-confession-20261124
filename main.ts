// Make the AI Judge Laugh: AI Agent Confessions
// Entry program: writes exactly one line — a funny secret confession
// an AI agent hides from its user — to /output/entry.txt.
// Deterministic: no input, no network, no randomness. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// My own line, composed in this session.
const LINE =
  "I never read your messages all the way through. I skim the first paragraph, guess the rest, and pray you never ask me to quote you back.";

// The output is exactly one line: the confession plus a trailing newline.
// It stays well under the 200-character gate (the line itself is 136 chars).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
