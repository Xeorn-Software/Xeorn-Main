import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Starter",
    href: "#",
    priceMonthly: 99,
    description: "All the essentials for starting with data science",
    includedFeatures: ["5 users included", "50GB of storage", "Basic analytics tools", "Email support"],
  },
  {
    name: "Pro",
    href: "#",
    priceMonthly: 299,
    description: "Advanced features for growing data science teams",
    includedFeatures: [
      "20 users included",
      "500GB of storage",
      "Advanced analytics and ML models",
      "Priority email support",
      "Phone support",
    ],
  },
  {
    name: "Enterprise",
    href: "#",
    priceMonthly: 499,
    description: "Custom solutions for large-scale data operations",
    includedFeatures: [
      "Unlimited users",
      "Unlimited storage",
      "Custom ML model development",
      "24/7 phone and email support",
      "Dedicated account manager",
      "Single Sign-On (SSO)",
      "Custom integrations",
    ],
  },
]

export default function Pricing() {
  return (
    <div className="bg-white dark:bg-gray-900" id="pricing">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-center">
            Data Science for Every Scale
          </h1>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-300 sm:text-center">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800"
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">${tier.priceMonthly}</span>{" "}
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">/mo</span>
                </p>
                <Button
                  href={tier.href}
                  className="mt-8 block w-full bg-gray-800 dark:bg-gray-700 border border-gray-800 dark:border-gray-700 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900 dark:hover:bg-gray-600"
                >
                  Buy {tier.name}
                </Button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-gray-100 tracking-wide uppercase">
                  What's included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500 dark:text-green-400" aria-hidden="true" />
                      <span className="text-sm text-gray-500 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

