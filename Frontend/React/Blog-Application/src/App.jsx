import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch posts from API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body.substring(0, 100)}...</p>
            <Link
              to={`/post/${post.id}`}
              className="text-blue-500 mt-4 inline-block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
