"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, MapPin, X } from "lucide-react"
import Image from "next/image"

type SearchTab = "all" | "hotels" | "things" | "restaurants" | "flights" | "holiday"

// Popular destinations data
const popularDestinations = [
  {
    name: "Dubai",
    location: "Emirate of Dubai, United Arab Emirates",
    image: "/dubai.jpg",
  },
  {
    name: "Port Blair",
    location: "Andaman and Nicobar Islands, India",
    image: "/port-blair.jpg",
  },
  {
    name: "Chandigarh",
    location: "India, Asia",
    image: "/chandigarh.jpg",
  },
  {
    name: "Candolim",
    location: "Goa, India",
    image: "/candolim.jpg",
  },
  {
    name: "Manali",
    location: "Himachal Pradesh, India",
    image: "/manali.jpg",
  },
]

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState<SearchTab>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchHeading, setSearchHeading] = useState("Where to?")
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleTabChange = (tab: SearchTab) => {
    setActiveTab(tab)

    // Update heading based on selected tab
    if (tab === "hotels") {
      setSearchHeading("Stay somewhere great")
    } else {
      setSearchHeading("Where to?")
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleDestinationClick = (destination: string) => {
    setSearchQuery(destination)
    setShowModal(false)
  }

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false)
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showModal])

  // Focus search input when modal opens
  useEffect(() => {
    if (showModal && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showModal])

  return (
    <section className="py-8 text-center relative mt-24">
      <h1 className="text-5xl font-bold mb-6">{searchHeading}</h1>
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-6">
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "all" 
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black" 
                : "text-gray-600 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-gray-300"
            }`}
            onClick={() => handleTabChange("all")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Search All
          </button>
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "hotels" 
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black" 
                : "text-gray-600 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-gray-300"
            }`}
            onClick={() => handleTabChange("hotels")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Hotels
          </button>
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "things" 
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black" 
                : "text-gray-600 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-gray-300"
            }`}
            onClick={() => handleTabChange("things")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v4l2 2"></path>
            </svg>
            Things to Do
          </button>
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "restaurants" 
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black" 
                : "text-gray-600 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-gray-300"
            }`}
            onClick={() => handleTabChange("restaurants")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
            >
              <path d="M3 18h18M3 12h18M3 6h18"></path>
            </svg>
            Restaurants
          </button>
          <button
            className={`flex items-center px-4 py-3 text-base font-semibold transition-colors duration-200 relative ${
              activeTab === "flights" 
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black" 
                : "text-gray-600 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-gray-300"
            }`}
            onClick={() => handleTabChange("flights")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-1"
            >
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
            Flights
          </button>
          
        </div>
        <form onSubmit={handleSearch} className="relative">
          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden border border-gray-200 p-2">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={
                  activeTab === "all"
                    ? "Places to go, things to do, hotels..."
                    : activeTab === "hotels"
                      ? "Where to stay..."
                      : activeTab === "things"
                        ? "Find things to do..."
                        : activeTab === "restaurants"
                          ? "Find restaurants..."
                          : activeTab === "flights"
                            ? "Find flights..."
                            : "Find holiday homes..."
                }
                className="w-full pl-12 pr-4 py-3 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={() => setShowModal(true)}
              />
            </div>
            <div className="px-2">
              <button
                type="submit"
                className="bg-[#34E0A1] text-black px-8 py-3 font-semibold hover:bg-[#2bc98f] transition-colors duration-200 rounded-full text-sm"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Search Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center border-b pb-4">
                <Search className="text-gray-800 h-5 w-5 mr-2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Restaurant or destination"
                  className="flex-grow text-lg focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={() => setShowModal(false)} className="ml-2 text-gray-500 hover:text-gray-700">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4">
                <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <div className="bg-gray-100 p-2 rounded-lg mr-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Nearby</h3>
                  </div>
                </div>

                <div className="flex items-center p-2 mt-2 cursor-pointer">
                  <div className="w-12 h-12 mr-3 overflow-hidden rounded-lg">
                    <Image
                      src="/neon-dystopia.png"
                      alt="Cotai"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Cotai Unveiled: The Entertainment Pulse of Macao</h3>
                    <p className="text-sm text-gray-500">Sponsored by Macao Government Tourism Office</p>
                  </div>
                </div>

                <h3 className="font-bold mt-6 mb-2">Popular Destinations</h3>

                {popularDestinations.map((destination, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={() => handleDestinationClick(destination.name)}
                  >
                    <div className="w-12 h-12 mr-3 overflow-hidden rounded-lg">
                      <Image
                        src={destination.image || `/placeholder.svg?height=48&width=48&query=${destination.name}`}
                        alt={destination.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{destination.name}</h3>
                      <p className="text-sm text-gray-500">{destination.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
