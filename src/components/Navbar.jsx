"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"


export default function Navbar() {
  const router=useRouter();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white text-black font-bold">
      <div className="container  flex h-14 items-center justify-between px-2 max-w-7xl mx-auto">
        {/* Left side with logo and hamburger menu */}
        <div className="flex items-center gap-2">
          {/* Mobile menu button - visible only on mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen} className={""}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/"
                  className="text-sm   transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <div className="space-y-3">
                  <div className="  text-sm cursor-pointer">Category</div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/category/1"
                      className="block text-muted-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Category 1
                    </Link>
                    <Link
                      href="/category/2"
                      className="block text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Cateogory 2
                    </Link>
                    <Link
                      href="/category/3"
                      className="block text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Catoegory 3
                    </Link>
                    <Link
                      href="/category/4"
                      className="block text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Cateogy 4
                    </Link>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="text-sm   transition-colors hover:text-primary hover:bg-[#1D3557]"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="text-sm   transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            ⚙️ <span>HHHardware & Tools</span>
          </Link>
        </div>

        {/* Navigation links in the middle - hidden on mobile */}
        {/* <div className="hidden md:flex items-center justify-center gap-6 font-medium"> */}
        <div className=" flex justify-center items-center max-sm:hidden">
          <Link href="/" className="text-sm  transition-colors text-primary">
            Home
          </Link>

          <DropdownMenu className={''}>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm   transition-colors text-primary">
              Category
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem>
                <Link href="/category/electronics">Category 1</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/category/clothing">Category 2</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/category/books">Category 3</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/category/home">Category 3</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="text-sm   transition-colors text-primary">
            About
          </Link>

          <Link href="/contact" className="text-sm   transition-colors text-primary">
            Contact Us
          </Link>
        </div>

        {/* Login/Signup buttons on the right - visible on all screen sizes */}
        <div className="flex items-center gap-4">
          <Button onClick={()=>router.push('/login')} variant="outline" size="icon" className="cursor-pointer px-8 bg-[#457B9D] text-white hover:bg-[#A8DADC] transition">
            Login
          </Button>
          <Button size="icon" variant="ghost" className=" cursor-pointer px-8 hover:bg-[#457B9D] hover:text-white border-2 border-[#457B9D] transition">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  )
}

