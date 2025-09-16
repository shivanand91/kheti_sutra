import React, { useState, useEffect } from 'react'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: "🌤️",
      title: "Weather Forecasting",
      description: "Get accurate weather predictions to plan your farming activities and protect your crops from adverse conditions."
    },
    {
      icon: "📚",
      title: "Blogs & Tutorials",
      description: "Access expert knowledge through comprehensive guides, tutorials, and latest farming techniques."
    },
    {
      icon: "📅",
      title: "Smart Calendar",
      description: "AI-powered crop timing recommendations based on your location, soil type, and crop selection."
    },
    {
      icon: "🧪",
      title: "Soil Testing",
      description: "Professional soil analysis recommendations to optimize fertilizer use and improve crop yield."
    },
    {
      icon: "🤖",
      title: "AI Chatbot",
      description: "24/7 intelligent assistance with voice and chat support for all your farming queries."
    },
    {
      icon: "📊",
      title: "Crop Analytics",
      description: "Advanced analytics and insights to track your farm's performance and maximize productivity."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Modern Farming
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and insights you need to maximize your agricultural success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
