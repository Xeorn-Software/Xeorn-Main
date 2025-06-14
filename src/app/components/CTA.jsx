import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <div className="bg-indigo-700 dark:bg-indigo-800">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Transform your data</span>
          <span className="block">into actionable insights.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Harness the power of advanced analytics and machine learning with Xeorn. Start your data science journey
          today.
        </p>
        <Button className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-indigo-700 sm:w-auto">
          Get started
        </Button>
      </div>
    </div>
  )
}