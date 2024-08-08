import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6"; // Import the X (Twitter) icon

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-8">
      <div className="text-7xl font-bold">Quincy Labs</div>
      <Button variant="outline" className="px-6 py-5 text-2xl">
        <Link href="https://x.com/Quincy_Labs" className="flex items-center">
          Follow on <FaXTwitter className="ml-2 mt-0.5 w-5 h-5" />
        </Link>
      </Button>
    </header>
  );
};

export default Header;
