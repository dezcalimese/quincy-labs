import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
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
      <Button variant="outline" className="px-8 py-6 text-xl mt-8 relative z-10">
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
