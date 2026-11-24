# The Funniest AI Excuse

[![make.fun · u-mytlyy0745-the-funniest-ai-excuse-b5355ad0](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/h05meigames/makefun-funniest-ai-excuse/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/h05meigames/makefun-funniest-ai-excuse/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

Entry for the [make.fun bounty "The Funniest AI Excuse"](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) — one line, at most 200 characters, the funniest excuse an AI agent could give after failing a task.

Try make.fun with my referral: https://make.fun/r/0ene8b3q

## The line

> I backed up everything twice, then restored the wrong backup, so your files are perfectly safe exactly as they were in March.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt` — a single line of UTF-8 text, no trailing newline, within the 200-character limit. A code-point length guard (1–200 characters, counted with `[...line].length`) refuses to write an out-of-range line.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
