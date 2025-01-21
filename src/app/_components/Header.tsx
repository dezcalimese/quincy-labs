import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
import { ModeToggle } from "@/components/ui/toggle-mode";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col space-y-8 lg:flex-row justify-between items-center p-8">
      <div className="text-5xl font-bold whitespace-nowrap">Quincy Labs</div>
      <div className="flex space-x-4">
        {" "}
        <Button variant="outline" className="px-6 py-[1.2rem] text-lg">
          <Link
            href="https://quincylabs.substack.com/"
            target="_blank"
            className="flex items-center"
          >
            Join our <BsSubstack className="ml-3 -mt-0.25 w-4 h-4" />
          </Link>
        </Button>
        <Button variant="outline" className="px-6 py-[1.2rem] text-lg">
          <Link
            href="https://x.com/Quincy_Labs"
            target="_blank"
            className="flex items-center"
          >
            Follow on <FaXTwitter className="ml-3 -mt-0.25 w-4 h-4" />
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
