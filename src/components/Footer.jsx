import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About Us Column */}
          <div>
            <h3 className="text-[#457B9D] font-semibold text-xl mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  H.H Files
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Raymond Group
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Manufacturing Facilities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Industry Recognition
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Whistleblower Policies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Work With Us Column */}
          <div>
            <h3 className="text-[#457B9D] font-semibold text-xl mb-4">Work With Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Core Values
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Life @ H.H
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Growth Opportunities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Campus Connect
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-[#457B9D] font-semibold text-xl mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Files
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Cutting Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Hand Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Power Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Power Tool Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-[#457B9D] font-semibold text-xl mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors flex items-center gap-2">
                  <Youtube size={18} />
                  Youtube
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors flex items-center gap-2">
                  <Linkedin size={18} />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors flex items-center gap-2">
                  <Facebook size={18} />
                  Facebook
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-[#457B9D] font-semibold text-xl mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Warranty Registration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Subscribe
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Service Network
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#A8DADC] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Award Badge and Address Section */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            {/* <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Award Badge"
              width={40}
              height={40}
              className="object-contain"
            /> */}
            <span className="text-[#457B9D] text-3xl" >H.H Hardware & Tools</span>
          </div>

          <p className="text-center text-sm mb-4">
            Address: Peer Atoullah, Near Water Tank , Uppar Fort,Aligarh-202001 (INDIA) | Email: anasmohd889@gmail.com
          </p>

          <p className="text-center text-sm border-t border-gray-800 pt-4 w-full">
            Design  And Deveoped By 💖 Sameer Khan Copyright 2025 by H.H Files & Tools | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

