"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Globe } from "lucide-react";

export default function Header() {
  const [showDiscoverMenu, setShowDiscoverMenu] = useState(false);
  const [showTripsMenu, setShowTripsMenu] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const discoverRef = useRef<HTMLDivElement>(null);
  const tripsRef = useRef<HTMLDivElement>(null);
  // const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        discoverRef.current &&
        !discoverRef.current.contains(event.target as Node)
      ) {
        setShowDiscoverMenu(false);
      }
      if (
        tripsRef.current &&
        !tripsRef.current.contains(event.target as Node)
      ) {
        setShowTripsMenu(false);
      }
    }

    function handleScroll() {
      // Assuming main search bar is 400px from top - adjust this value based on your layout
      if (window.scrollY > 400) {
        setShowBorder(true);
        setShowSearch(true);
      } else {
        setShowBorder(false);
        setShowSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white z-50 ${
        showBorder ? "border-b" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <Image
              src="https://cdn.discordapp.com/attachments/1363475006167847113/1363475036496986272/Tripadvisor_lockup_horizontal_secondary_registered.png?ex=68062a94&is=6804d914&hm=5852407bc0cb2b612fed7d0fbcd01bf1cbc90c2ec6e477e634679eae34ddc1b7&"
              alt="logo"
              width={150}
              height={50}
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          {showSearch ? (
            <form onSubmit={handleSearch} className="relative mr-4">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="bg-transparent border-none outline-none px-3 w-[200px] text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          ) : null}
          <div className="relative" ref={discoverRef}>
            <button
              className="text-base font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => {
                setShowDiscoverMenu(!showDiscoverMenu);
                setShowTripsMenu(false);
              }}
            >
              Discover
            </button>
            {showDiscoverMenu && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-lg z-50 border">
                <div className="py-2">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Travellers&apos; Choice
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Travel Stories
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Travel Forums
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Travel Articles
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="relative" ref={tripsRef}>
            <button
              className="text-base font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => {
                setShowTripsMenu(!showTripsMenu);
                setShowDiscoverMenu(false);
              }}
            >
              Trips
            </button>
            {showTripsMenu && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-lg z-50 border">
                <div className="py-2">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    My Trips
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Create Trip
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Trip Inspiration
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Trip Reviews
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            href="#"
            className="text-base font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            Review
          </Link>
          <Link
            href="#"
            className="text-base font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            More
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {!showSearch && (
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="h-5 w-5" />
            </button>
          )}
          <button className="flex items-center space-x-1 text-base font-semibold px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">
            <Globe className="h-5 w-5" />
            <span>INR</span>
          </button>
          <button className="bg-black text-white text-base font-semibold px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
