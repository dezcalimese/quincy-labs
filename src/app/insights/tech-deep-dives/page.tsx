import PageLayout from "@/app/_components/PageLayout";
import Link from "next/link";

export default function TechDeepDivesPage() {
  return (
    <PageLayout
      title="Tech Deep Dives"
      description="Technical tutorials and implementation guides"
    >
      <div className="space-y-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Our technical deep dives provide comprehensive tutorials, code examples, and implementation 
            guides for building with cutting-edge AI and blockchain technologies. From architecture 
            patterns to optimization techniques, we share practical knowledge from our engineering teams.
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Technical articles and tutorials are published on our external platforms.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://quincylabs.substack.com/"
              target="_blank"
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded transition-colors"
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