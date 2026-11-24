import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Sick-Day Excuse: one line, under 200 characters,
// that someone could send to call in sick — the funniest excuse
// in one breath, and nothing else.
const ENTRY =
  "Can't come in today — my toddler changed all my passwords and now I can't prove to my own laptop that I even work here.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
