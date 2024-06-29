import FeaturedPost from './FeaturedPost'
import Posts from './Posts'

const Portfolio = () => {
  return (
    <div className="relative m-auto ms-48 h-4/5 max-h-4/5 overflow-y-scroll no-scrollbar me-24 bg-transparent p-4">
      <div className="relative z-10">
        <FeaturedPost />
        <Posts />
      </div>
    </div>
  )
}

export default Portfolio
