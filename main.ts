// Snooze Button Roast — make.fun bounty u-carbon-forge-snooze-button-roast-14cbafc6
// Writes a single-line roast (1-200 chars) of an alarm clock ringing at 6 AM
// on a Saturday morning to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "It's 6 AM on a Saturday and my alarm clock is screaming like it pays the rent — the snooze button is the only one in this house who respects my boundaries.";

const OUT = "/output/entry.txt";

function main(): void {
  // The scorer requires UTF-8 text of 1 to 200 characters, not only whitespace,
  // a single line. Guard the invariant here so a bad edit fails loudly.
  const line = ENTRY.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, line + "\n", "utf8");
  console.log(`wrote ${OUT} (${line.length} characters)`);
}

main();
