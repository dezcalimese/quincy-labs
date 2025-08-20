import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";

export default function ResearchNotesPage() {
  return (
    <PageLayout
      title="Research Notes"
      description="Deep dives into our ongoing research projects and findings"
    >
      <div className="space-y-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Our research notes provide detailed insights into ongoing projects, experimental findings, 
            and theoretical explorations at the intersection of AI and blockchain technology.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Research notes are published on our Substack and Mirror platforms.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://quincylabs.substack.com/"
              target="_blank"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
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