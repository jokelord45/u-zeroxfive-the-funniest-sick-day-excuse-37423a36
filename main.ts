import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Sick-Day Excuse: one line, under 200 characters,
// that someone could send to call in sick — the funniest excuse
// in one breath, and nothing else.
const ENTRY =
  "Can't make it in today — my car started itself, drove to the beach, and texted me a photo of the sunset.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
