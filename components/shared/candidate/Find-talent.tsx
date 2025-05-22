import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

export default function FindTalent() {
  const benefits = [
    "Create a free employer account",
    "Post jobs and reach millions of candidates",
    "Use AI matching to find the perfect candidates",
    "Streamline your hiring process",
  ]

  return (
    <section className="py-16 sm:px-10 lg:px-20 px-20 sm:py-20">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-lg mb-4">Hire top talent efficiently</h2>
            <p className="text-gray-600 mb-6">
              Connect with qualified candidates quickly and easily. Our platform helps you streamline your recruitment
              process and find the perfect match for your team.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-blue-700 cursor-pointer hover:bg-blue-600 text-white px-6">Post a Job</Button>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative h-[300px] sm:h-[400px] w-full">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Hiring manager reviewing applications"
                width={500}
                height={400}
                className="rounded-lg object-cover h-full w-full"
              />

              <div className="absolute -left-4 top-1/4 bg-blue-500 text-white rounded-lg p-4 shadow-lg w-64 hidden sm:block">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">50% faster time-to-hire</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">AI-powered candidate matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">Dedicated account support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">No cost until you hire</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

