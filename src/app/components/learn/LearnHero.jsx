import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function LearnHero() {
  return (
    <div className="bg-indigo-700 dark:bg-indigo-800 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">Learn Data Science & Analytics</h1>
          <p className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Comprehensive tutorials, courses, and resources to master data science skills from beginner to advanced.
          </p>
          <div className="mt-6 max-w-lg mx-auto flex items-center bg-white dark:bg-gray-800 rounded-lg p-1">
            <input
              type="text"
              placeholder="Search tutorials, courses, topics..."
              className="block w-full px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-transparent focus:outline-none"
            />
            <Button className="flex-shrink-0">
              <Search className="h-5 w-5" />
              <span className="ml-2">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

