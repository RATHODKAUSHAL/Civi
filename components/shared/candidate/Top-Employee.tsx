import Image from "next/image"
import { Star, Check, MapPin, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TopEmployees() {
  const topEmployers = [
    {
      id: 1,
      name: "Google",
      logo: "/Assets/google.png",
      industry: "Technology",
      location: "Mountain View, CA",
      openPositions: 42,
      rating: 4.9,
      reviews: 1242,
      verified: true,
      benefits: ["Health Insurance", "Remote Work", "401k", "Paid Time Off", "Professional Development"],
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "/Assets/microsoft.png",
      industry: "Technology",
      location: "Redmond, WA",
      openPositions: 38,
      rating: 4.8,
      reviews: 982,
      verified: true,
      benefits: ["Health Insurance", "Flexible Hours", "Stock Options", "Parental Leave", "Gym Membership"],
    },
    {
      id: 3,
      name: "Amazon",
      logo: "/Assets/Amazon.png",
      industry: "E-commerce",
      location: "Seattle, WA",
      openPositions: 76,
      rating: 4.7,
      reviews: 876,
      verified: true,
      benefits: [
        "Health Insurance",
        "Career Growth",
        "Employee Discounts",
        "Relocation Assistance",
        "Tuition Reimbursement",
      ],
    },
    {
      id: 4,
      name: "Apple",
      logo: "/Assets/apple.png",
      industry: "Technology",
      location: "Cupertino, CA",
      openPositions: 29,
      rating: 4.9,
      reviews: 1124,
      verified: true,
      benefits: [
        "Health Insurance",
        "Stock Options",
        "Wellness Programs",
        "Education Reimbursement",
        "Product Discounts",
      ],
    },
  ]

  return (
    <section className="py-12 mx-20 sm:px-1 lg:px-20 sm:py-16 bg-white">
      <div className="">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-responsive-lg mb-3 sm:mb-0">Top Employers</h2>
          <Link href="#" className="text-portal-green font-medium hover:underline">
            View all employers
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topEmployers.map((employer) => (
            <div key={employer.id} className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative mb-3">
                  <Image
                    src={employer.logo || "/placeholder.svg"}
                    alt={employer.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  {employer.verified && (
                    <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1">
                      <Check className="h-3 w-3" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold">{employer.name}</h3>
                <p className="text-gray-600 text-sm">{employer.industry}</p>

                <div className="flex items-center justify-center mt-2">
                  <div className="flex items-center text-yellow-500 mr-1">
                    <Star className="h-4 w-4 fill-yellow-500" />
                  </div>
                  <span className="text-sm font-medium">{employer.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({employer.reviews})</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-3 text-xs text-gray-500">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span>{employer.location}</span>
              </div>

              <div className="border-t border-b py-3 mb-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4 text-portal-green" />
                    <span className="text-sm">Open Jobs</span>
                  </div>
                  <span className="font-bold text-portal-green">{employer.openPositions}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {employer.benefits.slice(0, 3).map((benefit, index) => (
                  <Badge key={index} variant="outline" className="bg-portal-gray text-gray-700 font-normal text-xs">
                    {benefit}
                  </Badge>
                ))}
                {employer.benefits.length > 3 && (
                  <Badge variant="outline" className="bg-portal-gray text-gray-700 font-normal text-xs">
                    +{employer.benefits.length - 3}
                  </Badge>
                )}
              </div>

              <Button className="w-full bg-portal-green hover:bg-portal-green-light text-white">View Jobs</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

