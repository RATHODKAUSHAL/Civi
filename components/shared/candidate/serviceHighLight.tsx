import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesHighlight() {
  // Stats data
  const stats = [
    { value: "90K+", label: "Placements" },
    { value: "81K+", label: "Applications" },
    { value: "97%", label: "Success Rate" },
  ];

  return (
    <Card className="border-0 shadow-md overflow-hidden mx-6 md:mx-10 rounded-2xl">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="w-full md:w-2/5 h-60 md:h-auto">
          <img
            src="/career-services.png"
            alt="Career services"
            className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
          />
        </div>

        {/* Right side - Content */}
        <CardContent className="flex-1 p-6 md:p-8 flex flex-col justify-center bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight mb-4">
            Empower Your Career with Our Expert Services
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Enhance your employability with our comprehensive career services. Our expert team guides you through resume building, interview preparation, and strategic job searching, all tailored to meet your career aspirations.
          </p>

          {/* Stats section */}
          <div className="flex justify-between gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-3 rounded-lg w-full">
                <p className="text-2xl md:text-3xl font-bold text-black">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-transform hover:scale-105">
              Learn More
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
