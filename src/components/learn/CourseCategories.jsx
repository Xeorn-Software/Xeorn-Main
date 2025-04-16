import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart2,
  Brain,
  Database,
  FileSpreadsheet,
  LineChart,
  Network,
  PieChart,
  Sigma,
  Workflow,
} from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: 1,
    title: "Data Structures",
    description: "Arrays, Linked Lists, Trees, Graphs, and more",
    icon: Database,
    slug: "data-structures",
    count: 42,
  },
  {
    id: 2,
    title: "Algorithms",
    description: "Sorting, Searching, Dynamic Programming",
    icon: Workflow,
    slug: "algorithms",
    count: 38,
  },
  {
    id: 3,
    title: "Machine Learning",
    description: "Supervised, Unsupervised, Reinforcement Learning",
    icon: Brain,
    slug: "machine-learning",
    count: 56,
  },
  {
    id: 4,
    title: "Deep Learning",
    description: "Neural Networks, CNN, RNN, Transformers",
    icon: Network,
    slug: "deep-learning",
    count: 31,
  },
  {
    id: 5,
    title: "Data Analysis",
    description: "Pandas, NumPy, Data Cleaning, EDA",
    icon: FileSpreadsheet,
    slug: "data-analysis",
    count: 45,
  },
  {
    id: 6,
    title: "Statistics",
    description: "Probability, Hypothesis Testing, Regression",
    icon: Sigma,
    slug: "statistics",
    count: 29,
  },
  {
    id: 7,
    title: "Data Visualization",
    description: "Matplotlib, Seaborn, Plotly, Tableau",
    icon: PieChart,
    slug: "data-visualization",
    count: 33,
  },
  {
    id: 8,
    title: "Big Data",
    description: "Hadoop, Spark, Distributed Computing",
    icon: BarChart2,
    slug: "big-data",
    count: 27,
  },
  {
    id: 9,
    title: "Time Series",
    description: "Forecasting, ARIMA, Prophet, LSTM",
    icon: LineChart,
    slug: "time-series",
    count: 22,
  },
]

export default function CourseCategories() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Categories</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Browse by Topic</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore our comprehensive collection of data science topics
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={`/learn/categories/${category.slug}`}>
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-indigo-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs font-medium text-indigo-600">{category.count} tutorials</span>
                    <span className="text-xs font-medium text-gray-500 hover:text-indigo-600">View all →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

