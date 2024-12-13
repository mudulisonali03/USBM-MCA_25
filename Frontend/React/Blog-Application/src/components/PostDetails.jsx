import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    // Fetch the single post by ID
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
  }, [id])

  if (!post) return <div className="text-center text-lg font-medium">Loading...</div>

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg max-w-2xl mt-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-4">{post.body}</p>

      <div className="mt-6">
        <a
          href="/posts"
          className="text-blue-600 hover:text-blue-800 text-lg font-medium"
        >
          &larr; Back to Posts
        </a>
      </div>
    </div>
  )
}

export default PostDetail
