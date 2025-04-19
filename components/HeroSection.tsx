import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/beach-disco.png"
          alt="Plan your trip"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent p-8 flex flex-col justify-center">
          <div className="text-white max-w-md">
            <div className="flex items-center text-xs mb-2">
              <span>Powered by AI</span>
              <span className="ml-2 bg-white text-black px-2 py-0.5 text-[10px] font-bold rounded">BETA</span>
            </div>
            <h2 className="text-3xl font-bold mb-1">Plan your kind of trip</h2>
            <p className="mb-4">Get custom recs for all the things you're into with AI trip builder.</p>
            <button className="bg-white text-black text-sm px-4 py-2 rounded-full flex items-center">
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
              Start a trip with AI
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
