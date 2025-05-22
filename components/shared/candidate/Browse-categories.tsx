import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function BrowseCategories() {
  const categories = [
    {
      id: 1,
      name: "Technology",
      image: "/Assets/technology.jpg",
      count: "25,234 jobs",
      badge: "Popular",
    },
    {
      id: 2,
      name: "Healthcare",
      image: "/Assets/healthcare.jpg",
      count: "18,453 jobs",
    },
    {
      id: 3,
      name: "Finance",
      image: "/Assets/finance.jpg",
      count: "12,678 jobs",
      badge: "Trending",
    },
    {
      id: 4,
      name: "Marketing",
      image: "/Assets/marketing.jpg",
      count: "9,890 jobs",
    },
    {
      id: 5,
      name: "Education",
      image: "/Assets/Education.jpg",
      count: "7,456 jobs",
      badge: "New",
    },
  ]

  return (
    <section className="py-12 sm:py-16 px-20 sm:px-10 lg:px-20 bg-portal-gray-light">
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-responsive-lg mb-3 sm:mb-0">Browse jobs by industry</h2>
          <Link href="#" className="text-portal-green font-medium hover:underline">
            View all industries
          </Link>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="#"
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-40 sm:h-48"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                {category.badge && (
                  <Badge className="self-start mb-2 bg-portal-green text-white">{category.badge}</Badge>
                )}
                <h3 className="text-white font-semibold">{category.name}</h3>
                <p className="text-white/80 text-xs sm:text-sm">{category.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

