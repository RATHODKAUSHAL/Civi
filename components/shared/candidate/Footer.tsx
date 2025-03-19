import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    about: [
      { label: "About Us", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Trust & Safety", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
    categories: [
      { label: "Technology", href: "#" },
      { label: "Healthcare", href: "#" },
      { label: "Finance", href: "#" },
      { label: "Marketing", href: "#" },
      { label: "Education", href: "#" },
      { label: "Retail", href: "#" },
      { label: "Hospitality", href: "#" },
      { label: "Manufacturing", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Success Stories", href: "#" },
      { label: "JobConnect Reviews", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Community", href: "#" },
    ],
    solutions: [
      { label: "Enterprise", href: "#" },
      { label: "JobConnect Business", href: "#" },
      { label: "JobConnect Pro", href: "#" },
      { label: "Career Advice", href: "#" },
      { label: "Resume Builder", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <div className="bg-gray-100">

    <footer className="sm:px-10 lg:px-20 mx-20 ">
      <div className=" py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-gray-100 text-portal-green flex items-center justify-center font-bold">
                J
              </div>
              <span className="font-semibold text-lg">JobConnect</span>
            </Link>
            <p className=" text-sm mb-6">
              Connecting talented professionals with their dream jobs and helping employers find the perfect candidates.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className=" hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className=" text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} JobConnect. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Cookie Settings
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

