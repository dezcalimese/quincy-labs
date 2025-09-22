import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <PageLayout
      title="About Us"
      description="Building the future at the intersection of AI and blockchain"
    >
      <div className="space-y-12">
        {/* Mission Statement */}
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            The Financial Reishi Research Institute is dedicated to advancing the frontiers of 
            artificial intelligence and blockchain technology. We believe in building infrastructure 
            that enables a more intelligent, decentralized, and equitable future.
          </p>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Leadership</h2>
          <div className="space-y-6">
            {/* First Co-founder */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold mb-2">Henry Ogedegbe Jr - Co-Founder & Principal Researcher</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Henry Ogedegbe Jr is Co-Founder and Principal Researcher at Quincy Labs, where he leads research
                  at the frontier of AI, blockchain, and distributed systems. His career spans Apple during the
                  iPhone era, the San Francisco 49ers' VenueNext startup designing AWS-powered payment platforms
                  for Super Bowl events, Verizon's 5G Innovation Labs building GPU-accelerated edge infrastructure
                  for XR/VR/AR, and AWS architecting large-scale AI/ML deployments. Recognized in Marquis Who's
                  Who in America for technology innovation, Henry holds advanced certifications including CompTIA
                  Security+, Linux+, Network+, Cisco CCNA, and SUSE Linux Administrator. Since entering crypto
                  in 2017, he has contributed to DeFi, consensus research, and agentic systems, and today drives
                  Monmouth—an AI-native blockchain optimized for real-time agents and cross-chain interoperability.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="https://linkedin.com/in/quincy-labs"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="https://x.com/Quincy_Labs"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="https://github.com/quincy-labs"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Co-founder - Dez */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold mb-2">Dez Calimese - Co-Founder & Chief Technology Officer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Dez Calimese is Co-Founder and Chief Technology Officer at Quincy Labs, where he leads blockchain
                  and AI agent research and development. He has founding engineering experience at Omo Protocol,
                  architecting ERC4626 standardized vaults and developing AI agent plugins for DeFi automation and
                  previously was the Lead Frontend Developer at Bricks Exchange, where he led a four-person
                  development team through frontend application development. With advanced certifications from
                  ConsenSys Academy, Encode Club, and Secureum in smart contract development and security, Dez
                  specializes in Solidity, cross-chain infrastructure, and AI-crypto integrations, having built
                  decentralized applications ranging from multi-signature wallets to staking protocols while
                  contributing to the advancement of autonomous financial systems and blockchain interoperability.
                  Beyond development, he also brings 10 years of experience as a music producer, bridging creative
                  and technical disciplines in his approach to innovation.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="https://linkedin.com/in/dezcalimese"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="https://github.com/dezcalimese"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Third Co-founder - Diamond */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold mb-2">Diamond Louden - Co-Founder of Monmouth & Director of Web3 Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Diamond Louden is Co-Founder of Monmouth and Director of Web3 Innovation at Quincy Labs, where
                  he advances AI-native blockchain research, decentralized finance, and cross-chain infrastructure.
                  At Accenture, he contributed to projects with Amazon, Mondelez International, Maserati, and
                  Walgreens Boots Alliance, specializing in business analysis, workflow optimization, and technical
                  writing for enterprise-scale digital initiatives. A Certified Bitcoin and Ethereum Professional
                  with additional training in Solana, ZK proofs, and blockchain security, Diamond has published
                  widely on innovation culture, DeFi, and quantum implications for Web3 while driving open-source
                  R&D and ecosystem growth across global markets.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="https://linkedin.com/in/diamond-ray"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="https://github.com/rayadamas"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Our Background</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Enterprise & Blockchain Experience</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our founding team combines decades of enterprise technology leadership with cutting-edge 
                blockchain expertise. From building infrastructure at Verizon and AWS to architecting 
                DeFi protocols at Omo Protocol and Bricks Exchange, we bring both scale and innovation.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Smart contract development & security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>DeFi protocol architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>AI agent integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Enterprise-scale systems</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Technical Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                With recognition in Marquis Who's Who and certifications from ConsenSys, Secureum, and 
                Encode Club, our team represents the convergence of academic rigor and practical expertise. 
                We've secured funding, shipped production systems, and contributed to the open-source ecosystem.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>$1M+ in secured funding</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Multiple blockchain certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Open-source contributions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Cross-chain expertise</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-semibold mb-2">Rigorous Research</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We pursue truth through scientific inquiry, peer review, and empirical validation
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-semibold mb-2">Open Innovation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our research and tools are open-source, advancing the entire ecosystem
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Practical Impact</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We build real systems that solve meaningful problems for people and organizations
              </p>
            </div>
          </div>
        </section>

        {/* Partners & Collaborators - Coming Soon */}
        {/* <section>
          <h2 className="text-2xl font-bold font-lora mb-6">Partners & Collaborators</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We collaborate with leading institutions, research labs, and technology companies to 
            advance the state of the art in AI and blockchain technology.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-500">12+</div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Research Partners</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-500">25+</div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Open Source Projects</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-500">450+</div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Contributors</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-500">8</div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Active Grants</p>
            </div>
          </div>
        </section> */}

        {/* Navigation to other About pages */}
        <section>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/about/philosophy"
              className="group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">
                Our Philosophy →
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn about Financial Reishi and our approach to innovation
              </p>
            </Link>
            <Link
              href="/about/story"
              className="group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">
                Our Story →
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Discover the journey that led to the creation of Quincy Labs
              </p>
            </Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}