import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, PinIcon as Pinterest, TwitterIcon as TikTok } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-6 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-sm font-semibold mb-4">About Tripadvisor</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Resources and Policies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Trust & Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Write a Review
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Add a Place
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Join
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Travelers&apos; Choice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Travel Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Do Business With Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Owners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Business Advantage
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Sponsored Placements
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Access our Content API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Become an Affiliate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Get The App
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  iPhone App
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Android App
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Tripadvisor Sites</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Book the best restaurants with TheFork
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Book tours and attraction tickets on Viator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Read cruise reviews on Cruise Critic
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Get airline seating charts on Seat Guru
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs text-gray-600 hover:underline">
                  Search for holiday rentals on Holiday Lettings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/tripadvisor-icon.png" alt="Tripadvisor" width={40} height={40} className="h-8 w-auto mr-2" />
              <div className="text-xs text-gray-600">© 2023 Tripadvisor LLC All rights reserved.</div>
            </div>
            <div className="flex items-center space-x-4">
              <select className="text-xs border rounded p-1">
                <option>$ USD</option>
              </select>
              <select className="text-xs border rounded p-1">
                <option>United States</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
            <Link href="#" className="text-xs text-gray-600 hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:underline">
              Privacy and Cookies Statement
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:underline">
              Cookie consent
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:underline">
              Site Map
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:underline">
              How the site works
            </Link>
          </div>

          <div className="flex justify-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Pinterest className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <TikTok className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            This is the version of our website addressed to speakers of English in the United States. If you are a
            resident of another country or region, please select the appropriate version of Tripadvisor for your country
            or region in the drop-down menu.
          </p>
        </div>
      </div>
    </footer>
  )
}
