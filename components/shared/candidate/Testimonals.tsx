"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote:
        "I found my dream job within two weeks of signing up. The platform's AI matching technology connected me with opportunities that perfectly matched my skills and career goals.",
      author: "Emma Thompson",
      role: "Software Engineer",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "TechCorp",
    },
    {
      id: 2,
      quote:
        "As a hiring manager, JobConnect has revolutionized our recruitment process. We've reduced our time-to-hire by 40% and found exceptional candidates for hard-to-fill positions.",
      author: "James Wilson",
      role: "HR Director",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "InnovateLabs",
    },
  ]

  const stats = [
    { value: "4.9/5", label: "Average rating from users" },
    { value: "95%", label: "Of employers find quality candidates" },
    { value: "Award winner", label: "Best job platform 2023" },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-blue-100">
    <section className="py-12 mx-20 sm:px-10 lg:px-20 sm:py-16 ">
      <div className="">
        <h2 className="text-responsive-lg text-center mb-8 sm:mb-12">People Love JobConnect</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-portal-green mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 relative">
          <div className="bg-white rounded-lg p-4 sm:p-8 shadow-sm max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[activeIndex].author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center mb-4 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg mb-4 italic text-center md:text-left">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div className="text-center md:text-left">
                  <p className="font-semibold">{testimonials[activeIndex].author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

