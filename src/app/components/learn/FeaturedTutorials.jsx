import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { BookOpen, Clock } from "lucide-react"
import Link from "next/link"
import { tutorials } from "../../data/learn-data"

export default function FeaturedTutorials() {
  // Only show the first 6 tutorials for the featured section
  const featuredTutorials = tutorials.slice(0, 6)

  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Tutorials
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Featured Tutorials</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Practical guides to help you implement data science concepts
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredTutorials.map((tutorial) => (
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

        <div className="mt-10 text-center">
          <Link
            href="/learn/tutorials"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            View All Tutorials
          </Link>
        </div>
      </div>
    </div>
  )
}

