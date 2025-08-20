import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaArrowUpRightFromSquare, FaArrowRight, FaFlask, FaCubes, FaBookOpen } from "react-icons/fa6";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header />
        <main className="flex-1">
        {/* Hero Section */}
        <section className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 -mt-24">
          <div className="relative z-10 flex flex-col place-items-center">
            <Image
              className="w-full h-auto max-w-[1600px]"
              src="/img/silbern.webp"
              alt="Silbern"
              width={1600}
              height={1067}
              sizes="(max-width: 1600px) 100vw, 1600px"
              priority
            />
            <p className="pt-6 text-xl md:text-2xl">Financial Reishi Research Institute</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="outline" className="px-8 py-6 text-xl relative z-10">
              <Link
                href="https://calendly.com/yuma-omoprotocol/30min"
                target="_blank"
                className="flex items-center"
              >
                Schedule a call{" "}
                <FaArrowUpRightFromSquare className="ml-4 mb-0.5 w-5 h-5" />
              </Link>
            </Button>
            <Button className="px-8 py-6 text-xl relative z-10 bg-blue-500 hover:bg-blue-600 text-white">
              <Link
                href="/research"
                className="flex items-center"
              >
                Explore Research{" "}
                <FaArrowRight className="ml-4 mb-0.5 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="px-8 md:px-24 pb-24 relative z-10">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link 
              href="/research"
              className="group bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <FaFlask className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">Research</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore our work in AI, blockchain, and healthcare innovation
              </p>
            </Link>
            
            <Link 
              href="/labs"
              className="group bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <FaCubes className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors">Labs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover Monmouth, Monarch, and our open-source Dropkits
              </p>
            </Link>
            
            <Link 
              href="/insights"
              className="group bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <FaBookOpen className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition-colors">Insights</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Read our latest thoughts on technology and markets
              </p>
            </Link>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
}
