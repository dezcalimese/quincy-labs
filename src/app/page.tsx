import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex flex-col place-items-center -mt-8">
        <Image
          className="w-full h-auto max-w-[1200px]"
          src="/img/silbern.webp"
          alt="Silbern"
          width={1200}
          height={800}
          sizes="(max-width: 1200px) 100vw, 1200px"
          priority
        />
        <p className="pt-4 text-lg">Financial Reishi Research Institute</p>
      </div>
      <Button variant="outline" className="px-6 py-[1.2rem] text-2xl mt-4">
        <Link
          href="https://calendly.com/yuma-omoprotocol/30min"
          target="_blank"
          className="flex items-center"
        >
          Schedule a call{" "}
          <FaArrowUpRightFromSquare className="ml-4 mb-0.5 w-5 h-5" />
        </Link>
      </Button>
    </main>
  );
}
