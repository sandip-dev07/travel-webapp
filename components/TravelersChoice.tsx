import Image from "next/image"

export default function TravelersChoice() {
  return (
    <section className="bg-[#fff8e7] py-12 mb-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="flex items-center mb-2">
            <div className="bg-yellow-500 rounded-full p-2 mr-2">
              <Image src="/tripadvisor-icon-gold.png" alt="Award" width={24} height={24} />
            </div>
            <h2 className="text-2xl font-bold">Travelers' Choice</h2>
          </div>
          <h3 className="text-2xl font-bold mb-4">Awards Best of the Best</h3>
          <p className="text-sm mb-6">Among our top 1% of places, stays, eats, and experiences—decided by you.</p>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full">See the winners</button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/travelers-choice.jpg"
            alt="Travelers Choice"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
