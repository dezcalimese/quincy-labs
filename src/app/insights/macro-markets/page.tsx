import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";

export default function MacroMarketsPage() {
  return (
    <PageLayout
      title="Macro & Markets"
      description="Analysis of market trends and macroeconomic factors"
    >
      <div className="space-y-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Our macro and markets analysis examines the broader economic forces shaping the future of 
            technology, finance, and innovation. We explore trends in AI adoption, blockchain infrastructure, 
            and the evolving digital economy.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Market analysis and commentary are published on our external platforms.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://quincylabs.substack.com/"
              target="_blank"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors"
            >
              Read on Substack
            </Link>
            <Link
              href="https://mirror.xyz/quincy-labs"
              target="_blank"
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Read on Mirror
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}