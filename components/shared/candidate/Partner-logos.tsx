import Image from "next/image"

export default function PartnerLogos() {
  const partners = [
    { name: "Google", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Microsoft", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Amazon", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Apple", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Meta", logo: "/placeholder.svg?height=40&width=120" },
    { name: "IBM", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="py-8 sm:py-12 bg-white border-t border-b">
      <div className="container">
        <p className="text-center text-sm text-gray-500 mb-6">Trusted by leading companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={40}
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

