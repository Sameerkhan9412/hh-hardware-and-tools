"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { categoryList } from "../../lib/utils";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data, status } = useSession();

  return (
    <nav className="sticky top-0 z-50 bg-white text-black font-bold">
      <div className="container  flex h-14 items-center justify-between px-2 max-w-7xl mx-auto">
        {/* Left side with logo and hamburger menu */}
        <div className="flex items-center gap-2">
          {/* Mobile menu button - visible only on mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className={"bg-white"}>
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/"
                  prefetch
                  className="  transition-colors text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <DropdownMenu className={"w-full"}>
                  <DropdownMenuTrigger className="flex items-center gap-1  transition-colors text-primary ">
                    Category
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className={"bg-white w-full"}
                  >
                    {categoryList.map((cat, index) => (
                      <DropdownMenuItem
                        className={"hover:bg-gray-500 transition-all"}
                      >
                        <Link href={`/products/${cat.path}`}>{cat.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  href="/about"
                  prefetch
                  className=" transition-colors text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  prefetch
                  className=" transition-colors text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link
            href="/"
            prefetch
            className="flex items-center gap-2 font-bold text-xl"
          >
            ⚙️ <span>HHHardware & Tools</span>
          </Link>
        </div>

        {/* Navigation links in the middle - hidden on mobile */}
        {/* <div className="hidden md:flex items-center justify-center gap-6 font-medium"> */}
        <div className=" flex justify-center items-center max-sm:hidden">
          <Link
            href="/"
            prefetch
            className="text-sm  transition-colors text-primary"
          >
            Home
          </Link>

          <DropdownMenu className={""}>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm   transition-colors text-primary">
              Category
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className={"bg-white"}>
              {categoryList.map((cat, index) => (
                <DropdownMenuItem
                  className={"hover:bg-gray-500 transition-all"}
                >
                  <Link href={`/products/${cat.path}`}>{cat.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            prefetch
            className="text-sm   transition-colors text-primary"
          >
            About
          </Link>

          <Link
            href="/contact"
            prefetch
            className="text-sm   transition-colors text-primary"
          >
            Contact Us
          </Link>
        </div>

        {/* Login/Signup buttons on the right - visible on all screen sizes */}
        <div className="flex items-center gap-4">
          {status === "unauthenticated" ? (
            <>
              <Button
                onClick={() => router.push("/sign-in")}
                variant="outline"
                size="icon"
                className="cursor-pointer px-8 bg-[#457B9D] text-white hover:bg-[#A8DADC] transition"
              >
                Login
              </Button>
              <Button
                onClick={() => router.push("/sign-up")}
                size="icon"
                variant="ghost"
                className=" cursor-pointer px-8 hover:bg-[#457B9D] hover:text-white border-2 border-[#457B9D] transition"
              >
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => router.replace("/profile")}
                variant="outline"
                size="icon"
                className="cursor-pointer px-8 bg-[#457B9D] text-white hover:bg-[#A8DADC] transition"
              >
                Profile
              </Button>
              <Button
                onClick={() => signOut()}
                variant="ghost"
                size="icon"
                className="cursor-pointer px-8  hover:bg-[#457B9D] hover:text-white border-2 border-[#457B9D] transition"
              >
                LogOut
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
