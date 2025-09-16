import React from 'react'

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "10 Essential Tips for Organic Farming Success",
      excerpt: "Learn the fundamental principles of organic farming and how to implement them effectively on your farm.",
      author: "Dr. Rajesh Agrawal",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Organic Farming",
      image: "🌱",
      featured: true
    },
    {
      title: "Weather Patterns and Crop Planning: A Complete Guide",
      excerpt: "Understand how weather patterns affect different crops and plan your farming activities accordingly.",
      author: "Meteorologist Priya Singh",
      date: "Dec 12, 2024", 
      readTime: "12 min read",
      category: "Weather",
      image: "🌤️",
      featured: false
    },
    {
      title: "Soil Testing: When, How, and Why It Matters",
      excerpt: "Discover the importance of soil testing and learn how to interpret results for better crop yields.",
      author: "Soil Scientist Amit Kumar",
      date: "Dec 10, 2024",
      readTime: "10 min read", 
      category: "Soil Health",
      image: "🧪",
      featured: false
    },
    {
      title: "AI in Agriculture: The Future is Here",
      excerpt: "Explore how artificial intelligence is revolutionizing modern farming practices and what it means for farmers.",
      author: "Tech Expert Sunita Patel",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      category: "Technology",
      image: "🤖",
      featured: false
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with expert insights, farming tips, and the latest trends in agriculture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                post.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className={`p-6 ${post.featured ? 'flex flex-col md:flex-row' : ''}`}>
                <div className={`${post.featured ? 'md:w-1/3 mb-4 md:mb-0 md:mr-6' : 'mb-4'}`}>
                  <div className="text-6xl text-center">{post.image}</div>
                </div>
                
                <div className={`${post.featured ? 'md:w-2/3' : ''}`}>
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">{post.readTime}</span>
                  </div>
                  
                  <h3 className={`font-bold text-gray-900 mb-3 ${post.featured ? 'text-xl' : 'text-lg'}`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <span className="text-gray-600 text-sm">👤</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    
                    <button className="text-green-600 hover:text-green-700 font-semibold text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
