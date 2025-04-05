import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { BookOpen, Clock } from "lucide-react"
import Link from "next/link"

const tutorials = [
  {
    id: 1,
    title: "Introduction to NumPy for Data Science",
    description: "Learn the fundamentals of NumPy, the essential package for scientific computing in Python.",
    category: "Python",
    readTime: "15 min read",
    difficulty: "Beginner",
    author: "Jane Smith",
    date: "2023-08-15",
    slug: "introduction-to-numpy",
  },
  {
    id: 2,
    title: "K-Means Clustering Algorithm Explained",
    description: "A comprehensive guide to understanding and implementing K-Means clustering for data segmentation.",
    category: "Machine Learning",
    readTime: "20 min read",
    difficulty: "Intermediate",
    author: "John Doe",
    date: "2023-09-02",
    slug: "kmeans-clustering-explained",
  },
  {
    id: 3,
    title: "Data Cleaning with Pandas: Best Practices",
    description: "Master the essential techniques for effective data cleaning and preprocessing using Pandas.",
    category: "Data Analysis",
    readTime: "18 min read",
    difficulty: "Beginner",
    author: "Sarah Johnson",
    date: "2023-09-10",
    slug: "data-cleaning-pandas",
  },
  {
    id: 4,
    title: "Building Neural Networks with PyTorch",
    description: "Step-by-step guide to creating and training neural networks using the PyTorch framework.",
    category: "Deep Learning",
    readTime: "25 min read",
    difficulty: "Advanced",
    author: "Michael Chen",
    date: "2023-08-28",
    slug: "neural-networks-pytorch",
  },
  {
    id: 5,
    title: "Time Series Forecasting Techniques",
    description: "Explore various methods for predicting future values based on previously observed values.",
    category: "Time Series",
    readTime: "22 min read",
    difficulty: "Intermediate",
    author: "Emily Wilson",
    date: "2023-09-05",
    slug: "time-series-forecasting",
  },
  {
    id: 6,
    title: "Introduction to SQL for Data Analysis",
    description: "Learn how to use SQL to extract and analyze data from relational databases.",
    category: "SQL",
    readTime: "16 min read",
    difficulty: "Beginner",
    author: "David Brown",
    date: "2023-08-20",
    slug: "sql-for-data-analysis",
  },
]

export default function FeaturedTutorials() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Tutorials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Tutorials</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Practical guides to help you implement data science concepts
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <Link key={tutorial.id} href={`/learn/tutorials/${tutorial.slug}`} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-md">
                <CardHeader className="p-4 pb-0">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">{tutorial.category}</Badge>
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
                          ? "border-green-500 text-green-700"
                          : tutorial.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }
                    >
                      {tutorial.difficulty}
                    </Badge>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-indigo-600">{tutorial.title}</h3>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-gray-500">{tutorial.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4 text-sm text-gray-500">
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
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View All Tutorials
          </Link>
        </div>
      </div>
    </div>
  )
}

