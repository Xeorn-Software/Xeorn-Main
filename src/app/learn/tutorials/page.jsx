import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { BookOpen, ChevronRight, Clock, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { tutorials, getUniqueTutorialCategories, getUniqueDifficulties } from "../../data/learn-data"

// Get unique categories and difficulties for filters
const categories = getUniqueTutorialCategories()
const difficulties = getUniqueDifficulties()

export default function TutorialsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            <li>
              <Link
                href="/learn"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Learn
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            <li>
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">Tutorials</span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Data Science Tutorials</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Comprehensive guides to help you master data science concepts and techniques
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">All Difficulties</option>
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>

              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>
            </div>

            <Button className="md:ml-auto">Apply Filters</Button>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <Link key={tutorial.id} href={`/learn/tutorials/${tutorial.slug}`} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="p-4 pb-0">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-300 dark:hover:bg-indigo-800">
                      {tutorial.category}
                    </Badge>
                    <Badge
                      variant={
                        tutorial.difficulty === "Beginner"
                          ? "outline"
                          : tutorial.difficulty === "Intermediate"
                            ? "secondary"
                            : "default"
                      }
                      className={
                        tutorial.difficulty === "Beginner"
                          ? "border-green-500 text-green-700 dark:border-green-400 dark:text-green-400"
                          : tutorial.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }
                    >
                      {tutorial.difficulty}
                    </Badge>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {tutorial.title}
                  </h3>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-300">{tutorial.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 p-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {tutorial.readTime}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="mr-1 h-4 w-4" />
                    {new Date(tutorial.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2" aria-label="Pagination">
            <Button variant="outline" className="px-2 py-1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
              Previous
            </Button>
            <Button
              variant="outline"
              className="px-3 py-1 bg-indigo-50 text-indigo-600 border-indigo-300 dark:bg-indigo-900 dark:text-indigo-300 dark:border-indigo-700"
            >
              1
            </Button>
            <Button variant="outline" className="px-3 py-1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
              2
            </Button>
            <Button variant="outline" className="px-3 py-1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
              3
            </Button>
            <span className="px-2 py-1 text-gray-500 dark:text-gray-400">...</span>
            <Button variant="outline" className="px-3 py-1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
              8
            </Button>
            <Button variant="outline" className="px-2 py-1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600">
              Next
            </Button>
          </nav>
        </div>
      </div>
    </div>
  )
}

