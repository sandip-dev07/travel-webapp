import Image from "next/image"
import { ChevronRight } from "lucide-react"

const topDestinations = [
  {
    name: "Rome, Italy",
    image: "/rome.jpg",
    description: "Explore ancient ruins, Vatican City, and enjoy authentic Italian cuisine.",
  },
  {
    name: "Paris, France",
    image: "/paris.jpg",
    description: "Visit the Eiffel Tower, Louvre Museum, and stroll along the Seine River.",
  },
  {
    name: "Las Vegas, NV",
    image: "/las-vegas.jpg",
    description: "Experience world-class entertainment, casinos, and vibrant nightlife.",
  },
  {
    name: "Reykjavik, Iceland",
    image: "/reykjavik.jpg",
    description: "Discover stunning landscapes, hot springs, and the Northern Lights.",
  },
]

export default function TopDestinations() {
  return (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <h2 className="text-xl font-bold mb-6">Top destinations for your next vacation</h2>

      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {topDestinations.map((destination, index) => (
            <div key={index} className="min-w-[220px] relative group cursor-pointer">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                width={220}
                height={150}
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                <h3 className="text-white text-sm font-medium">{destination.name}</h3>
              </div>
            </div>
          ))}
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
