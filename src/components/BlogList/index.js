import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsData} = props

  return (
    <ul className="blog-list">
      {blogsData.map(eachBlogItem => (
        <BlogItem key={eachBlogItem.id} blogItemDetails={eachBlogItem} />
      ))}
    </ul>
  )
}

export default BlogList
