import PageLayout from "@/app/_components/PageLayout";

export default function StoryPage() {
  return (
    <PageLayout
      title="Our Story"
      description="The journey from enterprise technology to cutting-edge research"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Quincy Labs was born from a simple observation: the most transformative technologies of our 
            time—artificial intelligence and blockchain—were developing in isolation, missing the 
            incredible potential of their convergence.
          </p>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-lora mb-8">The Journey</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-sm text-gray-500 dark:text-gray-500">Early Years</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mt-1 bg-blue-500 rounded-full"></div>
              <div className="flex-grow pb-8 border-l border-gray-300 dark:border-gray-700 pl-6 -mt-2">
                <h3 className="text-lg font-semibold mb-2">Enterprise Foundation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Years spent building and scaling critical infrastructure at Verizon and AWS provided 
                  deep insights into what it takes to create systems that billions depend on. This 
                  experience taught us that true innovation requires both technical excellence and 
                  practical understanding of real-world constraints.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-sm text-gray-500 dark:text-gray-500">2020-2022</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mt-1 bg-purple-500 rounded-full"></div>
              <div className="flex-grow pb-8 border-l border-gray-300 dark:border-gray-700 pl-6 -mt-2">
                <h3 className="text-lg font-semibold mb-2">The AI Revolution</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  As large language models began demonstrating unprecedented capabilities, we recognized 
                  a paradigm shift was underway. The focus shifted to understanding how these models 
                  could be enhanced with better memory systems and integrated with decentralized 
                  infrastructure.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-sm text-gray-500 dark:text-gray-500">2022-2023</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mt-1 bg-green-500 rounded-full"></div>
              <div className="flex-grow pb-8 border-l border-gray-300 dark:border-gray-700 pl-6 -mt-2">
                <h3 className="text-lg font-semibold mb-2">Blockchain Evolution</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  While others focused on speculation, we saw blockchain's true potential: creating 
                  trustless, decentralized infrastructure for AI systems. This led to early experiments 
                  with agent wallets and on-chain machine learning, laying the groundwork for what 
                  would become Monmouth.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-sm text-gray-500 dark:text-gray-500">2023</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mt-1 bg-red-500 rounded-full"></div>
              <div className="flex-grow pb-8 border-l border-gray-300 dark:border-gray-700 pl-6 -mt-2">
                <h3 className="text-lg font-semibold mb-2">Healthcare Initiative</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  A personal experience with the healthcare system's inefficiencies sparked the creation 
                  of Monarch AI. We realized that AI could transform healthcare delivery, particularly 
                  for underserved conditions like sickle cell disease, leading to partnerships with 
                  medical institutions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-sm text-gray-500 dark:text-gray-500">2024</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mt-1 bg-orange-500 rounded-full"></div>
              <div className="flex-grow pb-8 border-l border-gray-300 dark:border-gray-700 pl-6 -mt-2">
                <h3 className="text-lg font-semibold mb-2">Quincy Labs Founded</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The Financial Reishi Research Institute was formally established, bringing together 
                  our various research initiatives under one roof. Recognition in Marquis Who's Who 
                  validated our approach and attracted world-class collaborators.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-sm text-gray-500 dark:text-gray-500">Present</div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mt-1 bg-blue-500 rounded-full"></div>
              <div className="flex-grow pl-6 -mt-2">
                <h3 className="text-lg font-semibold mb-2">Building the Future</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Today, we're actively developing Monmouth L2, advancing Monarch AI with clinical 
                  partners, and releasing open-source tools that empower developers worldwide. Our 
                  research spans memory engineering, blockchain infrastructure, and healthcare AI, 
                  all unified by the vision of creating intelligent, decentralized systems that serve 
                  humanity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Milestones */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Key Milestones</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-semibold mb-2">Marquis Who's Who Recognition</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Honored for outstanding contributions to technology and innovation
              </p>
            </div>
            {/* <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold mb-2">Monmouth Testnet Launch</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Successfully deployed the world's first AI-native blockchain testnet
              </p>
            </div> */}
          </div>
        </section>

        {/* Vision for the Future */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Looking Ahead</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our story is just beginning. As AI and blockchain technologies mature, we see unprecedented 
              opportunities to create systems that are not just intelligent or decentralized, but both—systems 
              that learn, adapt, and evolve while remaining transparent, trustless, and user-controlled.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The Financial Reishi vision extends beyond technology. We're building infrastructure for a 
              future where artificial intelligence augments human capability, where financial systems serve 
              everyone equally, and where breakthrough medical treatments are accessible to all.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Join us as we write the next chapter—one where technology truly serves humanity's highest 
              aspirations.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold font-lora mb-4">Be Part of Our Story</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you're a researcher, developer, investor, or simply someone who believes in our 
            vision, there's a place for you in the Quincy Labs story.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </PageLayout>
  );
}