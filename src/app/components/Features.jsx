import { Zap, TrendingUp, Shield } from "lucide-react"

const features = [
  {
    name: "Advanced Analytics",
    description: "Gain deep insights from your data with our powerful analytics tools and visualizations.",
    icon: TrendingUp,
  },
  {
    name: "Machine Learning",
    description: "Leverage state-of-the-art machine learning models to predict trends and make informed decisions.",
    icon: Zap,
  },
  {
    name: "Data Security",
    description: "Rest easy knowing your data is protected by enterprise-grade security measures.",
    icon: Shield,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Empower your business with data science
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Xeorn offers a comprehensive set of tools to help you extract valuable insights from your data and drive
            your business forward.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 dark:bg-indigo-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

