import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'
import './index.css'

class Home extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/blogs')
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      const formattedData = data.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic,
      }))
      this.setState({blogsData: formattedData, isLoading: false})
    } catch (error) {
      console.error('Error fetching blogs:', error)
      this.setState({isLoading: false})
    }
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <BlogList blogsData={blogsData} />
        )}
      </div>
    )
  }
}

export default Home
