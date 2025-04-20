import Image from "next/image"

export default function TravelersChoice() {
  return (
    <section className="bg-[#fff8e7] py-16 mb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 rounded-full p-3 mr-4">
                  <Image src="/logo-award.svg" alt="Award" width={48} height={48} />
                </div>
                <h2 className="text-3xl font-bold">Travelers' Choice</h2>
              </div>
              <div className="space-y-6">
                <h3 className="text-6xl font-bold leading-tight">
                  Awards Best of <br /> the Best
                </h3>
                <p className="text-lg text-gray-700">
                  Among our top 1% of places, stays, eats, and experiences—decided by you.
                </p>
                <button className="bg-black text-white text-base px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
                  See the winners
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="p-8">
              <Image
                src="/award.jpg"
                alt="Travelers Choice"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
