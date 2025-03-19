import Image from "next/image"
import { MapPin, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PopularServices() {
  const jobs = [
    {
      id: 1,
      image: "/placeholder.svg?height=200&width=300",
      title: "Senior UX/UI Designer",
      company: "Google",
      location: "Mountain View, CA (Remote)",
      salary: "$120,000 - $150,000",
      jobType: "Full-time",
      postedTime: "2 days ago",
      badge: "Featured",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=200&width=300",
      title: "Full Stack Developer",
      company: "Microsoft",
      location: "Redmond, WA (Hybrid)",
      salary: "$110,000 - $140,000",
      jobType: "Full-time",
      postedTime: "1 week ago",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=200&width=300",
      title: "Product Manager",
      company: "Amazon",
      location: "Seattle, WA (On-site)",
      salary: "$130,000 - $160,000",
      jobType: "Full-time",
      postedTime: "3 days ago",
      badge: "Urgent",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=200&width=300",
      title: "Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA (Remote)",
      salary: "$140,000 - $170,000",
      jobType: "Full-time",
      postedTime: "5 days ago",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=200&width=300",
      title: "Marketing Specialist",
      company: "Spotify",
      location: "New York, NY (Hybrid)",
      salary: "$80,000 - $100,000",
      jobType: "Full-time",
      postedTime: "1 day ago",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=200&width=300",
      title: "DevOps Engineer",
      company: "Salesforce",
      location: "San Francisco, CA (Remote)",
      salary: "$125,000 - $155,000",
      jobType: "Full-time",
      postedTime: "Just now",
      badge: "New",
    },
    {
      id: 7,
      image: "/placeholder.svg?height=200&width=300",
      title: "Content Writer",
      company: "HubSpot",
      location: "Boston, MA (Remote)",
      salary: "$70,000 - $90,000",
      jobType: "Contract",
      postedTime: "2 weeks ago",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=200&width=300",
      title: "Frontend Developer",
      company: "Adobe",
      location: "San Jose, CA (Hybrid)",
      salary: "$100,000 - $130,000",
      jobType: "Full-time",
      postedTime: "3 days ago",
      badge: "Popular",
    },
  ]

  return (
    <section className="py-12 mx-20 sm:px-10 lg:px-20 sm:py-16 bg-portal-gray-light">
      <div className="responsive-container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-responsive-lg mb-3 sm:mb-0">Featured Job Listings</h2>
          <Link href="#" className="text-portal-green font-medium hover:underline">
            View all jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <Image
                  src={job.image || "/placeholder.svg"}
                  alt={job.company}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover"
                />
                {job.badge && (
                  <div className={`absolute top-2 right-2 badge-${job.badge.toLowerCase()}`}>{job.badge}</div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-medium text-base mb-1 line-clamp-1">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{job.company}</p>

                <div className="flex items-center mb-2 text-xs text-gray-500">
                  <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                </div>

                <div className="flex items-center mb-3 text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                  <span>{job.postedTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-portal-gray/50 text-gray-700 font-normal text-xs">
                    {job.jobType}
                  </Badge>
                  <span className="text-sm font-bold text-portal-green">{job.salary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

