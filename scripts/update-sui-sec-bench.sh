#!/usr/bin/env bash
# Copy the Sui Sec Bench results into this repo.
# Usage: scripts/update-sui-sec-bench.sh [path to sui-sec-bench-public]
set -euo pipefail
SRC="${1:-$HOME/sui-sec-bench-public}/leaderboard/results.json"
DEST="$(cd "$(dirname "$0")/.." && pwd)/data/sui-sec-bench/results.json"
python3 -m json.tool "$SRC" > /dev/null
cp "$SRC" "$DEST"
echo "Copied $SRC to $DEST"
