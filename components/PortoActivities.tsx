"use client"

import Image from "next/image"
import { Heart, ChevronRight, ChevronLeft, Star } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

const portoActivities = [
  {
    title: "Porto PRIVATE TOUR With Locals: Highlights & Hidden Gems",
    image: "/beach-1.jpg",
    rating: 4.5,
    reviews: 541,
    price: 88,
    currency: "$",
    bestSeller: false,
    category: "Private Tour",
  },
  {
    title: "Porto: Private tour in the Douro (1 to 4 people) on a boat just for you",
    image: "/beach-3.jpg",
    rating: 5.0,
    reviews: 271,
    price: 80,
    currency: "$",
    bestSeller: true,
    category: "Boat Tour",
  },
  {
    title: "Authentic Food and Wine Tour in Porto by Food Lover Tour",
    image: "/beach-1.jpg",
    rating: 5.0,
    reviews: 582,
    price: 85,
    currency: "$",
    badge: "LIKELY TO SELL OUT",
    bestSeller: true,
    category: "Food & Drink",
  },
  {
    title: "Porto PRIVATE TOUR With Locals: Highlights & Hidden Gems",
    image: "/beach-1.jpg",
    rating: 4.5,
    reviews: 541,
    price: 88,
    currency: "$",
    bestSeller: false,
    category: "Private Tour",
  },
  {
    title: "Lidador Tower",
    image: "/beach-4.jpg",
    rating: 4.4,
    reviews: 128,
    subtitle: "Architectural Buildings",
    bestSeller: false,
    category: "Attraction",
  },
]

export default function PortoActivities() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <h2 className="text-xl font-bold mb-1">You might like these</h2>
      <p className="text-sm text-gray-600 mb-4">More things to do in Porto</p>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {portoActivities.map((activity, index) => (
              <div
                key={index}
                className="flex-[0_0_250px] min-w-0 pl-4 relative group cursor-pointer transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      width={250}
                      height={180}
                      className="w-full h-[180px] object-cover"
                    />
                    <button className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110">
                      <Heart className="h-4 w-4 text-gray-500 group-hover:text-gray-700" />
                    </button>

                    {activity.category && (
                      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        {activity.category}
                      </div>
                    )}

                    {activity.badge && (
                      <div className="absolute bottom-3 left-3 bg-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        {activity.badge}
                      </div>
                    )}

                    {activity.bestSeller && !activity.badge && (
                      <div className="absolute bottom-3 left-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        BEST SELLER
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-medium line-clamp-2 min-h-[40px] mb-2">{activity.title}</h3>
                    {activity.subtitle && <p className="text-xs text-gray-600 mb-2 italic">{activity.subtitle}</p>}

                    <div className="flex items-center mb-2">
                      <div className="flex items-center bg-green-100 text-green-700 rounded-lg px-2 py-0.5">
                        <Star className="h-3 w-3 fill-green-500 text-green-500 mr-1" />
                        <span className="text-xs font-bold">{activity.rating.toFixed(1)}</span>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">({activity.reviews.toLocaleString()} reviews)</span>
                    </div>

                    {activity.price && (
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">from</p>
                        <p className="text-base font-bold">
                          {activity.currency}
                          {activity.price}
                          <span className="text-xs font-normal text-gray-500 ml-1">per adult</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2.5 shadow-md z-10 hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={scrollNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2.5 shadow-md hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
