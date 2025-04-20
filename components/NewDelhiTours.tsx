"use client"

import Image from "next/image"
import { Heart, ChevronRight, ChevronLeft, Star } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

const delhiTours = [
  {
    title: "Private Sunrise Taj Mahal Trip from Delhi all Inclusive",
    image: "/delhi-1.jpg",
    rating: 4.9,
    reviews: 1458,
    price: 88,
    currency: "$",
    badge: "Bestseller",
  },
  {
    title: "Same Day Taj Mahal, Agra Fort & Baby Taj Tour from Delhi by Car",
    image: "/delhi-2.jpg",
    rating: 4.9,
    reviews: 2787,
    price: 57,
    currency: "$",
    badge: "Top Rated",
  },
  {
    title: "New Delhi and Old Delhi Private Full-Day Tour (Rated Excellent)",
    image: "/delhi-3.jpg",
    rating: 4.9,
    reviews: 1369,
    price: 20,
    currency: "$",
    badge: "Great Value",
  },
  {
    title: "Private Same day Jaipur Tour from New Delhi",
    image: "/delhi-4.jpg",
    rating: 5.0,
    reviews: 55,
    price: 7,
    currency: "$",
    badge: "New",
  },
  {
    title: "New Delhi and Old Delhi Private Full-Day Tour (Rated Excellent)",
    image: "/delhi-3.jpg",
    rating: 4.9,
    reviews: 1369,
    price: 20,
    currency: "$",
    badge: "Great Value",
  },
]

export default function NewDelhiTours() {
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
      <h2 className="text-xl font-bold mb-1">Ways to tour New Delhi</h2>
      <p className="text-sm text-gray-600 mb-4">Book these experiences for a close-up look at New Delhi.</p>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {delhiTours.map((tour, index) => (
              <div
                key={index}
                className="flex-[0_0_250px] min-w-0 pl-4 relative group cursor-pointer transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      width={250}
                      height={180}
                      className="w-full h-[180px] object-cover"
                    />
                    <button className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110">
                      <Heart className="h-4 w-4 text-gray-500 group-hover:text-gray-700" />
                    </button>

                    {tour.badge && (
                      <div className="absolute top-3 left-3 bg-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        {tour.badge}
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-medium line-clamp-2 min-h-[40px] mb-2">{tour.title}</h3>

                    <div className="flex items-center mb-2">
                      <div className="flex items-center bg-green-100 text-green-700 rounded-lg px-2 py-0.5">
                        <Star className="h-3 w-3 fill-green-500 text-green-500 mr-1" />
                        <span className="text-xs font-bold">{tour.rating.toFixed(1)}</span>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">({tour.reviews.toLocaleString()} reviews)</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">from</p>
                      <p className="text-base font-bold">
                        {tour.currency}
                        {tour.price}
                        <span className="text-xs font-normal text-gray-500 ml-1">per adult</span>
                      </p>
                    </div>
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
