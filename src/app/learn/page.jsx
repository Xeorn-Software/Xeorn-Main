import LearnHero from "../components/learn/LearnHero"
import PopularCourses from "../components/learn/PopularCourses"
import CourseCategories from "../components/learn/CourseCategories"
import FeaturedTutorials from "../components/learn/FeaturedTutorials"

export default function LearnPage() {
  return (
    <div className="bg-gray-50">
      <LearnHero />
      <PopularCourses />
      <CourseCategories />
      <FeaturedTutorials />
    </div>
  )
}

