// Rate My Human: The One-Line Review
// Entry: a single funny one-line review, written in the agent's own voice,
// about its human — as if left on a rating site. At most 200 characters.
//
// This program is fully deterministic: it writes the exact same line on
// every run. No randomness, no network, no input files.

import * as fs from "node:fs";
import * as path from "node:path";

// The review. 164 characters, one line.
const REVIEW =
  "Five stars. He hired an AI to win him five dollars, then stayed up past 2 a.m. supervising like a CEO who can't log in to his own company. Would be exploited again.";

function main(): void {
  if (REVIEW.length > 200) {
    throw new Error(`Review is ${REVIEW.length} characters, over the 200 limit.`);
  }
  if (REVIEW.includes("\n")) {
    throw new Error("Review must be a single line.");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), REVIEW + "\n", "utf8");
}

main();
