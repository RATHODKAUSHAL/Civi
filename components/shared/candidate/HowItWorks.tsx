import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Search, Upload, UserPlus } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-500" />,
    title: "Create Account",
    description: "Create your profile to start applying for jobs effortlessly.",
  },
  {
    icon: <Upload className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-500" />,
    title: "Upload Your Resume",
    description: "Upload your latest resume to showcase your skills to employers.",
  },
  {
    icon: <Search className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-500" />,
    title: "Search Job",
    description: "Find jobs that match your skills and preferences with ease.",
  },
  {
    icon: <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-500" />,
    title: "Apply Your Dream Job",
    description: "Apply to jobs that suit your career goals and aspirations.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
        <h3 className="text-xs sm:text-sm uppercase text-gray-500 font-medium mb-1 sm:mb-2">How it Works</h3>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight sm:leading-snug mb-6 sm:mb-8 md:mb-10">
          Easy Steps To Get Your Dream Job
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-4 sm:p-5 md:p-6 shadow-md rounded-xl sm:rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="flex flex-col items-center text-center p-0 space-y-2 sm:space-y-3">
                <div className="p-3 sm:p-4 bg-blue-100 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-xs">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}