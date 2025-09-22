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
                  Henry Ogedegbe Jr is co-founder and Principal Researcher at Quincy Labs. Previously, Henry held
                  leadership roles at Verizon and AWS, where he architected enterprise-scale technology solutions
                  and led cross-functional teams in cloud infrastructure development. Henry has been recognized
                  in Marquis Who's Who for his contributions to technology innovation and has extensive experience
                  in AI/ML systems design and blockchain research. He began exploring cryptocurrency in 2017 and
                  has since contributed to multiple Web3 projects. Henry holds advanced certifications in cloud
                  architecture, distributed systems, Secureum, and Encode Club.
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
                  Dez Calimese is co-founder and Chief Technology Officer at Quincy Labs. Dez has
                  founding engineering experience at Omo Protocol where he
                  architected ERC4626 vaults, AI agent integrations, and cross-chain solutions as well as leadership experience at Bricks Exchange as the lead frontend engineer among other startup roles. Dez holds certifications from ConsenSys, Secureum, and Encode Club in blockchain development.
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
                <h3 className="text-xl font-bold mb-2">Diamond Louden - Co-Founder & Director of Web3 Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Diamond Louden is co-founder and Director of Web3 Innovation at Quincy Labs. Previously, Diamond
                  was a research analyst focusing on emerging blockchain ecosystems and quantum computing applications
                  in cryptography. Diamond is a Certified Bitcoin Professional and Certified Ethereum Professional
                  with additional specializations in Solana app architecture and smart contract development. He holds certifications from the
                  C4 Institute, Solana Foundation, and Encode Club.
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
                Learn about TigerStyle coding, Financial Reishi, and our approach to innovation
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