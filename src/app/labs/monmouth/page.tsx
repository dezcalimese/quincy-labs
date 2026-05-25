import PageLayout from "@/app/_components/PageLayout";
import { FaMicrochip, FaRobot, FaShield, FaNetworkWired } from "react-icons/fa6";

export default function MonmouthPage() {
  return (
    <PageLayout
      title="Monmouth"
      description="Settlement infrastructure for autonomous AI agents — enabling identity, coordination, payments, verification, and execution guarantees"
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Settlement Infrastructure for Autonomous Agents</h2>
            <p className="text-lg opacity-90">
              Monmouth is settlement infrastructure for autonomous AI agents — enabling identity, 
              coordination, payments, verification, and execution guarantees across blockchain 
              ecosystems. Built on Commonware (BFT Simplex consensus, QMDB storage) with REVM v34 execution.
            </p>
          </div>
        </section>

        {/* Specs Table */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Chain Specifications</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Chain ID", value: "7750" },
              { label: "Hardfork", value: "Prague" },
              { label: "Gas Limit", value: "30M" },
              { label: "Block Time", value: "2s" },
              { label: "Consensus", value: "BLS12-381 (2f+1)" },
              { label: "Execution", value: "REVM v34" },
            ].map((spec) => (
              <div key={spec.label} className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <span className="text-gray-500 dark:text-gray-400">{spec.label}</span>
                <span className="font-mono text-sm">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaRobot className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Agent Transaction Classifier</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Pre-execution routing with confidence scoring. Classifies transactions before
                execution to route them optimally through the system.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>&bull; PureEvm &mdash; standard EVM execution (1.0 confidence)</li>
                <li>&bull; SvmRouted &mdash; Solana VM routing via precompile</li>
                <li>&bull; HybridCrossChain &mdash; cross-chain message passing</li>
                <li>&bull; RagEnhanced &mdash; vector/AI precompile calls</li>
                <li>&bull; AgentToAgent &mdash; ERC-8004 registry interactions</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaMicrochip className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Precompiles</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Native precompiled contracts for AI inference, vector search, intent parsing,
                SVM routing, and cross-chain messaging.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>&bull; <code className="font-mono">0x1000</code> &mdash; AI Inference (10K gas)</li>
                <li>&bull; <code className="font-mono">0x1001</code> &mdash; Vector Similarity Search (5K gas)</li>
                <li>&bull; <code className="font-mono">0x1002</code> &mdash; Intent Parser (5K gas)</li>
                <li>&bull; <code className="font-mono">0x1003</code> &mdash; SVM Router (10K gas)</li>
                <li>&bull; <code className="font-mono">0x4200</code> &mdash; Cross-Chain Messenger (20K gas)</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaShield className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">ERC-8004 Registries</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Three on-chain registries for agent identity, reputation, and capability validation
                deployed at well-known addresses.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>&bull; IdentityRegistry &mdash; ERC-721 agent identity NFTs with metadata</li>
                <li>&bull; ReputationRegistry &mdash; on-chain feedback with tagged scoring</li>
                <li>&bull; ValidationRegistry &mdash; independent capability verification</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <FaNetworkWired className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Consensus & Networking</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                BFT Simplex consensus with BLS12-381 threshold signatures and Commonware
                P2P transport for block propagation.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>&bull; DKG ceremony for distributed key generation</li>
                <li>&bull; Ed25519 identity keys for validator auth</li>
                <li>&bull; P2P channels: blocks, votes, certs, backfill</li>
                <li>&bull; Full JSON-RPC (eth/net/web3/monmouth namespaces)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Execution Flow</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
            <div className="space-y-4">
              {[
                { step: "1", label: "DKG Ceremony", desc: "Ed25519 identity keys generate BLS12-381 threshold shares" },
                { step: "2", label: "Consensus", desc: "Simplex BFT proposes blocks from the mempool" },
                { step: "3", label: "Classification", desc: "TransactionClassifier routes txs pre-execution" },
                { step: "4", label: "Execution", desc: "REVM executes with custom precompiles, produces ChangeSet" },
                { step: "5", label: "State Commit", desc: "ChangeSet merges into QMDB via OverlayState, state root computed" },
                { step: "6", label: "RPC", desc: "JSON-RPC serves clients on HTTP (:8545) and WebSocket (:8546)" },
                { step: "7", label: "Metrics", desc: "Prometheus on :9002 tracks block execution latency" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-3 bg-white dark:bg-gray-800 rounded">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-mono text-sm font-bold">
                    {item.step}
                  </span>
                  <div>
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">&mdash; {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Security</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contract Level</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>&bull; ReentrancyGuard on all state-mutating functions</li>
                <li>&bull; Checks-effects-interactions pattern throughout</li>
                <li>&bull; Custom errors for gas efficiency</li>
                <li>&bull; Owner-only access control via NFT ownership</li>
                <li>&bull; One-response enforcement in ValidationRegistry</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Execution Level</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>&bull; Full intrinsic gas validation (base, create, calldata, access list, blob)</li>
                <li>&bull; Nonce and balance sufficiency checks</li>
                <li>&bull; EIP-1559 dynamic base fee algorithm</li>
                <li>&bull; Header validation with sequential block number and parent hash chain</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Testing</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold font-mono mb-1">1,362+</div>
              <div className="text-sm text-gray-500">Rust tests</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold font-mono mb-1">61</div>
              <div className="text-sm text-gray-500">Solidity tests (Forge)</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold font-mono mb-1">10K</div>
              <div className="text-sm text-gray-500">Stress test txs</div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
