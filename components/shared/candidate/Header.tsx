import React from "react";
import Image from "next/image";
import { Search, Shield, CheckCircle, Users } from "lucide-react";

export default function FreelanceHeader() {
  const stats = [
    { number: "2M+", label: "Active Job Listings" },
    { number: "10K+", label: "Companies Hiring" },
    { number: "15M+", label: "Registered Job Seekers" },
    { number: "500K+", label: "Jobs Filled Monthly" },
  ]
  return (
    <div className="bg-gray-100 lg:px-20 w-full">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                <span className="text-[#4361ee] block mb-2">Find your dream job With Civi</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg max-w-md">
                Connect with thousands of employers and discover opportunities that match your skills and career goals
              </p>
            </div>

            {/* Enhanced Search Bar */}
            <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col sm:flex-row items-center">
              <div className="flex-1 flex items-center px-4 w-full mb-2 sm:mb-0">
                <Search className="text-gray-400 mr-3 flex-shrink-0" size={20} />
                <input
                  type="text"
                  placeholder="What service are you looking for?"
                  className="w-full py-2 sm:py-3 text-gray-700 focus:outline-none"
                />
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-gray-200 px-4 w-full sm:w-auto py-2 sm:py-0">
                <select className="bg-transparent text-gray-700 focus:outline-none py-2 sm:py-3 w-full">
                  <option>All Categories</option>
                  <option>Design</option>
                  <option>Development</option>
                  <option>Marketing</option>
                  <option>Writing</option>
                </select>
              </div>
              <button className="bg-blue-600 hover:bg-[#4895ef] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors w-full sm:w-auto mt-2 sm:mt-0">
                Search
              </button>
            </div>
            <section className="py-8">
              <div className="responsive-container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col gap-3 items-center">
                      <p className="text-xl md:text-2xl font-bold text-portal-green">{stat.number}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Content Area with Images */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] mx-auto max-w-md lg:max-w-full">
              {/* Main images with improved positioning */}
              <div className="absolute right-0 top-0 rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] w-[200px] sm:w-[250px] md:w-[300px] shadow-xl shadow-blue-500">
                <div className="bg-blue-200 h-full w-full">
                  <Image
                    src="/Assets/man-working-as-truck-driver-posing.jpg"
                    alt="Professional freelancer"
                    width={300}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>

              <div className="absolute left-0 bottom-0 rounded-2xl overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] w-[150px] sm:w-[200px] md:w-[250px] shadow-xl shadow-blue-500">
                <div className="bg-blue-200 h-full w-full">
                  <Image
                    src="/Assets/woman-looking-laptop-writing-down-orders-deliver.jpg"
                    alt="Professional with headphones"
                    width={800}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>

              {/* Feature cards */}
              <div className="absolute top-[50px] sm:top-[80px] left-[10px] sm:left-[30px] bg-white p-2 sm:p-3 md:p-4 rounded-xl shadow-lg w-[180px] sm:w-[200px] md:w-[220px] transform rotate-[5deg]">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="bg-blue-100 p-1 sm:p-2 rounded-full">
                    <CheckCircle className="text-blue-600 h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Verified Quality</h3>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">All freelancers pass our rigorous vetting process</p>
              </div>

              <div className="absolute bottom-[40px] sm:bottom-[50px] right-[10px] bg-white p-2 sm:p-3 md:p-4 rounded-xl shadow-lg w-[180px] sm:w-[200px] md:w-[220px]">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="bg-blue-100 p-1 sm:p-2 rounded-full">
                    <Shield className="text-blue-600 h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Secure Platform</h3>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">Safe payments and protected work agreements</p>
              </div>

              <div className="absolute bottom-[10px] left-[40px] sm:left-[80px] bg-white p-2 sm:p-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1 sm:p-2 bg-blue-100 rounded-full">
                    <Users className="text-blue-600 h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <div className="flex -space-x-1 sm:-space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                          <Image
                            src={`/api/placeholder/32/32`}
                            alt={`Professional ${i}`}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">58M+ Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}