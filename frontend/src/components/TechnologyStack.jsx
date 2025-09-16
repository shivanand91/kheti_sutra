import React from 'react'

const TechnologyStack = () => {
  const technologies = [
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      technologies: ["TensorFlow", "PyTorch", "Computer Vision", "Natural Language Processing"],
      description: "Advanced AI models for crop analysis, pest detection, and personalized recommendations"
    },
    {
      category: "Weather Data",
      icon: "🌤️",
      technologies: ["Satellite Imagery", "IoT Sensors", "Weather APIs", "Climate Models"],
      description: "Real-time weather monitoring and accurate forecasting using multiple data sources"
    },
    {
      category: "Mobile & Web",
      icon: "📱",
      technologies: ["React", "React Native", "Node.js", "Progressive Web App"],
      description: "Cross-platform applications accessible on any device, anywhere"
    },
    {
      category: "Cloud & Security",
      icon: "☁️",
      technologies: ["AWS Cloud", "Blockchain", "End-to-End Encryption", "GDPR Compliance"],
      description: "Secure, scalable infrastructure ensuring your data is always protected"
    },
    {
      category: "Data Analytics",
      icon: "📊",
      technologies: ["Big Data Processing", "Real-time Analytics", "Predictive Modeling", "Data Visualization"],
      description: "Transform raw farm data into actionable insights and predictions"
    },
    {
      category: "IoT Integration",
      icon: "🌐",
      technologies: ["Smart Sensors", "Drone Technology", "Automated Systems", "Edge Computing"],
      description: "Connect and monitor your farm equipment and sensors seamlessly"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powered by Advanced Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Krishi Sutra leverages cutting-edge technology to provide you with the most accurate and reliable farming solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{tech.category}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {tech.description}
              </p>
              
              <div className="space-y-2">
                {tech.technologies.map((technology, techIndex) => (
                  <div key={techIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-300 text-sm">{technology}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future of Farming?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of farmers who are already using our advanced technology to maximize their yields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyStack
