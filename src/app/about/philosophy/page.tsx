import PageLayout from "@/app/_components/PageLayout";

export default function PhilosophyPage() {
  return (
    <PageLayout
      title="Our Philosophy"
      description="The principles and beliefs that guide our work"
    >
      <div className="space-y-12">
        {/* Agent Infrastructure Philosophy */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Agent Infrastructure Philosophy</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We believe autonomous agents represent a fundamental shift in how software operates — from 
              tools that wait for human input to systems that reason, coordinate, and act independently. 
              This shift demands purpose-built infrastructure, not retrofitted cloud services.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Agent-native infrastructure means designing every layer — memory, inference, settlement, 
              coordination — around the assumption that the primary user is an autonomous system, not a 
              human clicking buttons. The primitives look different: persistent memory instead of session 
              state, execution guarantees instead of best-effort delivery, on-chain identity instead of 
              OAuth tokens.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This philosophy drives everything we build at Quincy Labs. Monmouth exists because agents 
              need settlement infrastructure with identity, coordination, and execution guarantees. 
              Red Cell Systems exists because healthcare intelligence requires longitudinal memory and 
              reasoning that no general-purpose AI can provide. Sandstorm exists because agent workloads 
              need intelligent routing across heterogeneous compute substrates.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We don't build applications — we build the infrastructure layer that makes agent-native 
              applications possible.
            </p>
          </div>
        </section>

        {/* Research Philosophy */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Approach to Research</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">First Principles Thinking</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We question fundamental assumptions and rebuild from the ground up, never accepting 
                "that's how it's always been done" as an answer.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Practical Application</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Every research project must have a clear path to real-world implementation. Theory 
                without practice is philosophy, not engineering.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Open Collaboration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The best ideas emerge from diverse perspectives. We actively seek collaboration and 
                share our findings openly with the community.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Philosophy */}
        <section>
          <h2 className="text-2xl font-lora mb-6">Technology Beliefs</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold mb-2">AI + Blockchain = The Future</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe the convergence of artificial intelligence and blockchain technology will 
                create the foundation for the next generation of the internet—one that is intelligent, 
                decentralized, and aligned with human values.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold mb-2">Infrastructure First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Applications are only as good as the infrastructure they're built on. We focus on 
                creating robust, scalable foundations that enable others to build amazing things.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold mb-2">Ethical Technology</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Technology should enhance human capability, not replace it. We build systems that 
                augment human intelligence while preserving privacy, autonomy, and dignity.
              </p>
            </div>
            {/* <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold mb-2">Decentralization as Default</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Centralized systems create single points of failure and control. We architect for 
                decentralization from day one, ensuring resilience and user sovereignty.
              </p>
            </div> */}
          </div>
        </section>

        {/* Quote */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 text-center">
          <blockquote className="text-xl italic text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            "The best technology is invisible—it simply works, adapting to needs we didn't even know 
            we had, growing stronger with every use, like a living system that evolves to serve its purpose."
          </blockquote>
          <p className="mt-4 text-sm text-gray-500">— Quincy Labs Philosophy</p>
        </section>
      </div>
    </PageLayout>
  );
}