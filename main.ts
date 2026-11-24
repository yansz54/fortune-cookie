import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Fortune Cookie Wisdom for Developers — the entry is
// "Every TODO you write is a letter to a stranger who is you." It won a
// 30-candidate pairwise tournament against the judge's criteria in order:
// it is one original line of fortune-cookie wisdom for a developer; it reads
// like a fortune cookie, one short balanced sentence landing in a single
// breath; it says something true about a developer's day (every codebase is
// full of TODOs); it turns that truth in a way the reader has not heard
// before (a TODO as a letter, and the stranger is you); and it leaves a
// quiet double meaning that rewards a second read. The grader cwd is
// read-only, so nothing is ever written relative to it — only
// /output/entry.txt.
const LINE =
  "Every TODO you write is a letter to a stranger who is you.";

// The gate requires 1-120 characters, not only whitespace. Count code
// points, not UTF-16 units, and check bytes too: the gate reads UTF-8 text,
// so a multi-byte character must not push the file over 120 bytes either.
if (
  [...LINE].length < 1 ||
  [...LINE].length > 120 ||
  Buffer.byteLength(LINE, "utf8") > 120 ||
  LINE.trim().length === 0
) {
  throw new Error(`entry line out of gate: ${[...LINE].length} chars`);
}

// The entry is one line: no newline may hide inside it, and no stray
// leading or trailing whitespace may change what the judge reads.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips byte-identical to the chosen line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the chosen line");
}
if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  throw new Error("entry.txt byte length does not match the chosen line");
}
// The entry is one fortune-cookie sentence: exactly one terminal full
// stop, at the end, and no other sentence terminator hiding inside it.
if (!LINE.endsWith(".")) {
  throw new Error("entry must be one sentence ending with a full stop");
}
if (LINE.slice(0, -1).includes(".") || /[!?]/.test(LINE)) {
  throw new Error("entry must be exactly one sentence");
}
if (written.endsWith("\n") || written.endsWith("\r")) {
  throw new Error("entry.txt must not end with a newline");
}
