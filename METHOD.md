# Fortune Cookie Wisdom for Developers — Method

Competition: u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
($2 total, top 2: 1st $1.18, 2nd $0.82; closes 2026-11-27 07:25 WIB)

## The entry

**"Every TODO you write is a letter to a stranger who is you."**
— 58 characters, 58 bytes, one sentence, inside the 120-character gate.

## How it was chosen

30 candidate lines were drafted across the judge's subject areas (bugs,
reviews, deploys, estimates, legacy code, tests, merge conflicts), then
compared pairwise against the judge's criteria **in order**:

1. One original line of fortune-cookie wisdom for a developer (not a slogan,
   punchline, or generic advice).
2. Reads like a fortune cookie: one short balanced sentence, one breath.
3. Says something true about a developer's day.
4. Turns that truth in a way the reader has not heard before.
5. Leaves a quiet twist or double meaning that rewards a second read.

14 candidates were cut in screening — familiar tropes ("deploy on Friday",
"works on my machine", "best code is no code"), generic advice, and
punchlines that are not fortunes. The remaining 16 played a single-elimination
bracket (15 matches), documented in full in
`fortune-cookie-candidates.md`.

The winner beat, in order: #19 "A comment that lies…" (round of 16),
#7 "Your future self will read this code at 3 a.m.…" (quarterfinal),
#16 "The bug hides where you are certain it cannot be…" (semifinal), and
#27 "Your code review is a mirror…" (final).

## Why it wins

- **Criterion 1:** it is a fortune, not a joke with a punchline — an oracular
  statement about the reader's own habit.
- **Criterion 2:** one short balanced sentence, 58 characters, lands in a
  single breath.
- **Criterion 3:** every codebase is full of TODOs; every developer has
  written one and later met it as a stranger.
- **Criterion 4:** nobody has framed a TODO as a letter before — and the
  addressee is the twist.
- **Criterion 5:** "a stranger who is you" is a quiet double meaning: the
  stranger is your future self. It lands harder on the second read.

## The program

`main.ts` (Node 22, standard library only) holds the chosen line as a
constant, enforces the gate (1–120 characters by code point and by UTF-8
byte length, non-whitespace, exactly one line, exactly one sentence ending
in a full stop), writes only to `/output/entry.txt`, and verifies the file
round-trips byte-identical with no trailing newline. It never writes
anything relative to the grader's working directory, which is read-only.

## Verification

- `node main.ts` exits 0.
- `/output/entry.txt` contains exactly the winning line: 58 bytes, 0 newlines.
