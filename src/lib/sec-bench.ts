// The Sec Bench series. Used on the home page, the Research index and each benchmark page.
export const SEC_BENCH = {
  title: 'Sec Bench',
  line: 'AI security benchmarks for Sui and Solana, with EVM next.',
  benches: [
    { name: 'Sui Sec Bench', href: '/research/sui-sec-bench', line: 'Sui Move: detect, patch and exploit. Models find the bug and rarely fix it.' },
    { name: 'Solana Sec Bench', href: '/research/solana-sec-bench', line: 'Anchor and Pinocchio: detect, patch and exploit. Finding, fixing and proving are different skills.' },
  ],
} as const;
