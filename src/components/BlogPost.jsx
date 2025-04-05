export default function BlogPost({ title, date, author, content }) {
  return (
    <article className="max-w-2xl mx-auto py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="text-gray-600 mt-2">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </time>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
      </header>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}