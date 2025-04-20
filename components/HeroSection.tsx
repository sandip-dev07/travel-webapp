import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <div className="relative rounded-3xl overflow-hidden bg-[#0B3954]">
        <Image
          src="/hero-image.jpg"
          alt="Plan your trip"
          width={1200}
          height={400}
          className="w-full h-[480px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3954]/90 via-[#0B3954]/50 to-transparent p-12 flex flex-col justify-center">
          <div className="text-white max-w-lg">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium">Powered by AI</span>
              <span className="bg-white text-black px-2 py-0.5 text-xs font-bold rounded">BETA</span>
            </div>
            <h2 className="text-5xl w-[400px] font-bold mb-4">Plan your kind of trip</h2>
            <p className="text-2xl mb-8 leading-tight">Get custom recs for all the things you&apos;re into with AI trip builder.</p>
            <button className="bg-white text-black px-6 py-3 rounded-full flex items-center text-base font-medium hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M22 2L11 13"></path>
                <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
              </svg>
              Start a trip with AI
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
