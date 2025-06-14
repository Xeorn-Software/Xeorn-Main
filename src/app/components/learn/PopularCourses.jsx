import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Clock, Star, Users } from "lucide-react"
import Link from "next/link"
import { courses } from "../../data/learn-data"

export default function PopularCourses() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Popular Courses
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Start Learning Today</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Our most popular courses to help you master data science skills
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Link key={course.id} href={`/learn/courses/${course.slug}`} className="group">
              <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        course.level === "Beginner"
                          ? "outline"
                          : course.level === "Intermediate"
                            ? "secondary"
                            : "default"
                      }
                      className={
                        course.level === "Beginner"
                          ? "border-green-500 text-green-700 dark:border-green-400 dark:text-green-400"
                          : course.level === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }
                    >
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {course.title}
                  </h3>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500 dark:text-gray-300">{course.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 p-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    {course.students.toLocaleString()} students
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

