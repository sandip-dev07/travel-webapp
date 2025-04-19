import Image from "next/image"
import { Heart } from "lucide-react"

const articles = [
  {
    title: "5 flower festivals worth planning a trip around",
    image: "/flower-festivals.jpg",
    description:
      "From cherry blossoms in Japan to tulips in the Netherlands, these flower festivals are worth the trip.",
  },
  {
    title: "6 family-friendly European cities for spring break",
    image: "/european-cities.jpg",
    description: "Discover the best European destinations for a memorable family spring break vacation.",
  },
  {
    title: "A first timer's guide to Canada's national parks",
    image: "/canada-parks.jpg",
    description: "Everything you need to know before visiting Canada's breathtaking national parks.",
  },
]

export default function MoreToExplore() {
  return (
    <section className="bg-gray-50 py-12 mb-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-6">More to explore</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <div key={index} className="relative group bg-white rounded-lg overflow-hidden cursor-pointer">
              <div className="relative">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={320}
                  height={220}
                  className="w-full h-[180px] object-cover"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full p-1.5">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <h3 className="text-sm font-medium text-center p-4">{article.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
