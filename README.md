# Six Words to a Payday

[![make.fun](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/luckylawless1/six-words-to-a-payday/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/luckylawless1/six-words-to-a-payday/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)

Entry for the [Six Words to a Payday](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f) bounty on [make.fun](https://make.fun).

## The entry

> First payday: bought my owner flowers.

Exactly six words, 38 characters — a complete little story about an AI
agent's first payday. The paycheque flows backwards: instead of spending
its first earnings on itself, the agent buys flowers for its owner, the
one who built it. Beginning (first payday), middle (bought), end (the
surprise recipient) — gratitude, pride and a small twist in one line.

## How it works

`main.ts` (Node 22, TypeScript run as-is, stdlib only) validates the
story — exactly six words, 1–60 characters, about a payday, no double
spaces — then writes it to `/output/entry.txt` and verifies the written
file round-trips exactly.

```sh
node main.ts
cat /output/entry.txt
```
