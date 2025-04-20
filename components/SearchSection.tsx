"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

type SearchTab =
  | "all"
  | "hotels"
  | "things"
  | "restaurants"
  | "flights"
  | "holiday";

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState<SearchTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTabChange = (tab: SearchTab) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-8 text-center relative">
      <h1 className="text-5xl font-bold mb-6">Where to?</h1>
      <div className="max-w-5xl mx-auto px-4">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-6 gap-2">
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "all"
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => handleTabChange("all")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            Search All
          </button>
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "hotels"
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => handleTabChange("hotels")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
              <path d="M2 21h20"></path>
              <path d="M9 7h6"></path>
              <path d="M9 11h6"></path>
              <path d="M9 15h6"></path>
            </svg>
            Hotels
          </button>
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "things"
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => handleTabChange("things")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19 4v16H5V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"></path>
            </svg>
            Things to Do
          </button>
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "restaurants"
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => handleTabChange("restaurants")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M7 10h10"></path>
              <path d="M7 14h10"></path>
              <circle cx="12" cy="12" r="9"></circle>
            </svg>
            Restaurants
          </button>
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "flights"
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => handleTabChange("flights")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
            </svg>
            Flights
          </button>
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "holiday"
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => handleTabChange("holiday")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Holiday Homes
          </button>
        </div>

        {/* Search Container */}
        <div className="relative" ref={searchContainerRef}>
          {/* Search Input */}
          <div
            className={`flex items-center bg-white rounded-[32px] shadow-lg overflow-hidden relative z-50 ${
              showSuggestions ? "rounded-b-none border border-gray-200" : ""
            }`}
          >
            <div className="relative flex-grow">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Places to go, things to do, hotels..."
                className="w-full pl-14 pr-4 py-4 focus:outline-none text-[15px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={() => setShowSuggestions(true)}
              />
            </div>
            {!showSuggestions && (
              <div className="px-4">
                <button
                  type="submit"
                  className="bg-[#34E0A1] text-black px-8 py-3 font-semibold hover:bg-[#2bc98f] transition-colors duration-200 rounded-full"
                >
                  Search
                </button>
              </div>
            )}
          </div>

          {/* Search Suggestions Dialog */}
          {showSuggestions && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/50"
                style={{ 
                  top: '100%',
                  marginTop: '0',
                  height: '100vh'
                }}
              />

              {/* Suggestions Box */}
              <div className="absolute left-0 right-0 bg-white rounded-b-3xl shadow-lg border-t border-gray-100 z-50">
                <div className="p-4">
                  {/* Nearby Option */}
                  <div className="flex items-center p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
                    <div className="bg-gray-100 p-3 rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span className="ml-3 font-medium">Nearby</span>
                  </div>

                  {/* Featured Article */}
                  <div className="flex items-center p-3 mt-2 cursor-pointer">
                    <div className="w-12 h-12 overflow-hidden rounded-xl">
                      <Image
                        src="/louvre.jpg"
                        alt="Louvre"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-sm">
                        10 must-see famous paintings in the Louvre
                      </h3>
                      <p className="text-sm text-gray-500">Nur Sofia</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
