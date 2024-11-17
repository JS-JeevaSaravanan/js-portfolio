"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { usePathname } from "next/navigation";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

// constants
import { navigationPaths } from "@/constants/navigation";

const Header = () => {
  const pathname = usePathname();

  const handleButtonClick = (e) => {
    if (pathname === navigationPaths.contact) {
      e.preventDefault();
      alert("Please fill and send the message.");
    }
  };

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*Logo*/}
        <Link href={navigationPaths.home}>
          <h1 className="text-4xl fond-semibold">
            JS
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {
            <Link href={navigationPaths.contact} passHref>
              <Button onClick={handleButtonClick}>Immediate Joinee</Button>
            </Link>
          }
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
