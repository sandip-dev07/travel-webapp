import Image from "next/image"
import { ChevronRight } from "lucide-react"

const seasideDestinations = [
  {
    region: "World",
    image: "/beach-1.jpg",
    description: "Grace Bay, Providenciales, Turks and Caicos",
  },
  {
    region: "Europe",
    image: "/beach-4.jpg",
    description: "Spiaggia dei Conigli, Lampedusa, Italy",
  },
  {
    region: "Asia",
    image: "/beach-3.jpg",
    description: "Maya Bay, Ko Phi Phi, Thailand",
  },
  {
    region: "South Pacific",
    image: "/beach-4.jpg",
    description: "Bondi Beach, Sydney, Australia",
  },
]

export default function ExploreSeasides() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Explore the world's most stunning seasides</h2>
          <p className="text-gray-600">2023's Travelers' Choice Awards Best of the Best Beaches</p>
        </div>
        <button className="text-[#34E0A1] hover:text-black transition-colors flex items-center gap-1 font-medium">
          See all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="relative">
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {seasideDestinations.map((destination, index) => (
            <div 
              key={index} 
              className="min-w-[280px] group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-sm font-medium px-4 py-1.5 rounded-full z-10 shadow-sm flex items-center">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                  2023 Winner
                </div>
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.region}
                  width={280}
                  height={320}
                  className="w-full h-[320px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{destination.region}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10">
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </section>
  )
}
