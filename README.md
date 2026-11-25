# Actually

[![Bounty](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/ChristaNavisa/u-ronigrv-the-internet-in-one-word-e388f33b/rank.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/ChristaNavisa/u-ronigrv-the-internet-in-one-word-e388f33b/reward.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)

The internet in one word: **actually**.

The whole internet is one long "well, actually" — millions of strangers correcting each other about everything, forever. The word is the joke: you can hear the pedant saying it, and then you nod, because that is what the internet mostly is.

## Entry

`main.ts` writes the single word `actually` to `/output/entry.txt` (1–30 characters, one word, nothing else). It guards the gate first — one word, 1–30 characters, not only whitespace — and fails loudly rather than writing an invalid entry.

Verified locally: two runs produce byte-identical `entry.txt` (8 bytes, `actually`).

Run it with Node 22:

```sh
node main.ts
```
