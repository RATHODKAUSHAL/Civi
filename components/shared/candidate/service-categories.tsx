import { Briefcase, Building, FileText, HelpCircle } from "lucide-react"

export default function ServiceCategories() {
  const categories = [
    {
      icon: Briefcase,
      title: "Search Jobs",
      description: "Browse thousands of job listings across industries",
      link: "#",
    },
    {
      icon: Building,
      title: "Company Profiles",
      description: "Research potential employers and company culture",
      link: "#",
    },
    {
      icon: FileText,
      title: "Resume Builder",
      description: "Create a professional resume that stands out",
      link: "#",
    },
    {
      icon: HelpCircle,
      title: "Career Advice",
      description: "Get expert tips on job searching and interviews",
      link: "#",
    },
  ]

  return (
    <section className="py-12 px-20 lg:px-20 sm:py-16 bg-white">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-responsive-lg text-2xl font-bold mb-3">Looking for a new opportunity?</h2>
        <p className="text-gray-600 text-xl mb-12 max-w-2xl">
          We&apos;ve got all the tools you need to find your perfect job and advance your career
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col text-center">
              <div className="w-16 h-16 rounded-full bg-portal-green/10 flex items-center justify-center mb-4">
                <category.icon className="h-10 text-start w-10 text-blue-800" />
              </div>
              <h3 className="text-lg text-start font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 text-start text-lg mb-4">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

