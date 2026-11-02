# Sui Sec Bench data

`results.json` is a copy of `leaderboard/results.json` from the Sui Sec Bench repo.
The page at `/research/sui-sec-bench` reads it at build time.

To update it:

```bash
scripts/update-sui-sec-bench.sh ~/sui-sec-bench-public
```

Then run `bun run build` and check the page. Do not edit the numbers by hand.
