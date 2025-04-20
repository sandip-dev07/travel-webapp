import Image from "next/image"
import { ChevronRight } from "lucide-react"

const destinations = [
  {
    name: "Rishikesh, India",
    image: "/rishikesh.jpg",
    description: "Known for yoga, adventure sports, and the sacred Ganges River.",
  },
  {
    name: "Mussoorie, India",
    image: "/mussoorie.jpg",
    description: "A hill station with panoramic views of the Himalayas.",
  },
  {
    name: "Dehradun, India",
    image: "/dehradun.jpg",
    description: "Gateway to popular hill stations and religious sites.",
  },
  {
    name: "Jim Corbett National Park, India",
    image: "/jim-corbett.jpg",
    description: "India's oldest national park known for its Bengal tigers.",
  },
]

export default function DreamNextTrip() {
  return (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <h2 className="text-xl font-bold mb-1">Dream Your Next Trip</h2>
      <p className="text-sm text-gray-600 mb-4">Weekend getaways from New Delhi</p>

      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {destinations.map((destination, index) => (
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
