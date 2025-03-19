import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPlans() {
  const plans = [
    {
      name: "Basic",
      price: 29,
      period: "per month",
      description: "Perfect for small businesses with occasional hiring needs",
      features: [
        "Post up to 3 jobs",
        "Access to candidate database",
        "Basic applicant tracking",
        "Email support",
        "Job performance analytics",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: 49,
      period: "per month",
      description: "Ideal for growing companies with regular hiring needs",
      features: [
        "Post up to 10 jobs",
        "Advanced candidate search",
        "Applicant tracking system",
        "Priority support",
        "Enhanced job visibility",
        "Branded company profile",
        "Resume database access",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Business",
      price: 99,
      period: "per month",
      description: "For larger organizations with ongoing recruitment",
      features: [
        "Post unlimited jobs",
        "Advanced candidate matching",
        "Complete ATS functionality",
        "24/7 premium support",
        "Featured job listings",
        "Branded career page",
        "Resume database access",
        "Custom reporting",
        "Dedicated account manager",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Enterprise",
      price: 129,
      period: "per month",
      description: "Custom solutions for large enterprises",
      features: [
        "All Business features",
        "Custom contract terms",
        "Enterprise-grade security",
        "Single sign-on (SSO)",
        "API access",
        "Dedicated success team",
        "Compliance assistance",
        "Volume discounts",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="py-12 mx-20 sm:px-10 lg:px-20 sm:py-16 bg-white">
      <div className="responsive-container">
        <h2 className="text-responsive-lg text-center mb-3">Employer Plans</h2>
        <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          Choose the plan that works for your hiring needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 sm:p-6 flex flex-col ${
                plan.popular ? "border-portal-green shadow-md" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-portal-green text-white text-xs font-semibold px-3 py-1 rounded-full self-start mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-2xl sm:text-3xl font-bold">${plan.price}</span>
                <span className="text-gray-600 text-sm">/{plan.period}</span>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-portal-green mr-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-portal-green hover:bg-portal-green-light text-white"
                    : "bg-white text-portal-green border-portal-green hover:bg-portal-gray"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

