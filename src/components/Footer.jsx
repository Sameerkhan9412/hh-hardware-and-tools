import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { categoryList } from "../../lib/utils";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* About Us Column */}
          <div>
            <h3 className="text-[#457B9D] font-semibold text-xl mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products/half-round-files"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Feedbacks
                </Link>
              </li>
            </ul>
          </div>

          {/* Work With Us Column */}
          <div>
            <h3 className="text-[#457B9D] font-semibold text-xl mb-4">
              Work With Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Core Values
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Life @ H.H
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Growth Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Campus Connect
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className=" col-span-2">
            <h3 className="text-[#457B9D] font-semibold text-xl mb-4 text-center">
              Category
            </h3>
            <ul className="space-y-2 grid grid-cols-2">
              {categoryList.map((cat, index) => (
                <li className={""}>
                  <Link href={`/products/${cat.path}`}>{cat.title}</Link>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Hand Files
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Round Files
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Half Round Files
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Traingle Files
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Square Files
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Pillar Narrow Files
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-[#457B9D] font-semibold text-xl mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors flex items-center gap-2"
                >
                  Bustard Files
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors flex items-center gap-2"
                >
                  2nd Cut Files
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors flex items-center gap-2"
                >
                  Flat Smooth Files
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-[#457B9D] font-semibold text-xl mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  8077351916
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  anasmohd889@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A8DADC] transition-colors"
                >
                  Whatsapp
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
            <span className="text-[#457B9D] text-3xl">
              H.H Hardware & Tools
            </span>
          </div>

          <p className="text-center text-sm mb-4">
            Address: Peer Atoullah, Near Water Tank , Uppar Fort,Aligarh-202001
            (INDIA) | Email: anasmohd889@gmail.com
          </p>

          <p className="text-center text-sm border-t border-gray-800 pt-4 w-full">
            Design And Deveoped By 💖 Sameer Khan Copyright 2025 by H.H Files &
            Tools | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
