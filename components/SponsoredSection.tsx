import Image from "next/image"

export default function SponsoredSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <div className="bg-purple-50 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/offraod-race.jpg"
                alt="Travel with your dog"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Travel with your dog</h3>
                <p className="text-sm">Find pet-friendly hotels, restaurants, and activities</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
            <div className="flex items-center mb-4">
              <Image src="/owl-logo.svg" alt="Tripadvisor" width={24} height={24} className="mr-2" />
              <span className="text-base text-gray-600">
                Sponsored by <span className="font-bold">CESAR®</span>
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2">It's easier than ever to go together</h2>
            <p className="text-sm mb-6">
              Travel is better when you can share it with your best friend.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium">Explore more</button>
          </div>
        </div>
      </div>
    </section>
  )
}
