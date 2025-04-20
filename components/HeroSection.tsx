import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/beach-disco.png"
          alt="Plan your trip"
          width={840}
          height={150}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent px-12 py-8 flex flex-col justify-center">
          <div className="text-white max-w-md px-6">
            <div className="flex items-center text-sm  mb-3">
              <span className="text-xl font-bold">Powered by AI</span>
              <span className="ml-2 bg-white text-black px-3 py-1.5 text-base font-bold rounded">BETA</span>
            </div>
            <h2 className="text-7xl font-bold mb-3">Plan your kind of trip</h2>
            <p className="mb-6 text-3xl font-bold">Get custom recs for all the things you're into with AI trip builder.</p>
            <button className="bg-white text-black text-base font-bold px-8 py-4 rounded-full flex items-center">
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
                className="h-5 w-5 mr-2"
              >
                <path d="M22 2L11 13"></path>
                <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
              </svg>
              Start a trip with AI
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
