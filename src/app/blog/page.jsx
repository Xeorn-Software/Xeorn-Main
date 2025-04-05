import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Leveraging AI in Data Science: A Comprehensive Guide",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the field of data science and how you can harness its power.",
    date: "2023-06-15",
    author: "Dr. Jane Smith",
    slug: "leveraging-ai-in-data-science",
  },
  {
    id: 2,
    title: "The Future of Big Data Analytics",
    excerpt:
      "Explore the emerging trends and technologies shaping the future of big data analytics and their potential impact on businesses.",
    date: "2023-07-02",
    author: "John Doe",
    slug: "future-of-big-data-analytics",
  },
  {
    id: 3,
    title: "Machine Learning Best Practices for Beginners",
    excerpt:
      "Learn the essential best practices for getting started with machine learning, from data preparation to model evaluation.",
    date: "2023-07-20",
    author: "Sarah Johnson",
    slug: "machine-learning-best-practices",
  },
]

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Xeorn Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights, tutorials, and news from the world of data science.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

