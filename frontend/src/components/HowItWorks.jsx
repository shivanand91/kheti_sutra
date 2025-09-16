import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Setup",
      description: "Create your account and set up your farm profile with location, soil type, and crop preferences.",
      icon: "📝",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      title: "Get AI Insights",
      description: "Our AI analyzes your farm data and provides personalized recommendations for optimal farming practices.",
      icon: "🤖",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: "Monitor & Track",
      description: "Track weather conditions, crop growth, and receive real-time alerts and notifications.",
      icon: "📊",
      color: "from-green-500 to-green-600"
    },
    {
      number: "04",
      title: "Optimize & Grow",
      description: "Follow our recommendations to optimize your farming practices and maximize your crop yield.",
      icon: "🌱",
      color: "from-emerald-500 to-emerald-600"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Krishi Sutra Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with Krishi Sutra in just 4 simple steps and transform your farming experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto`}>
                  {step.number}
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">Ready to get started?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
