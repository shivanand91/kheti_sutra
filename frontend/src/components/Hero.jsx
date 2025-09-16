import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} h-screen flex flex-col justify-center items-center`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Revolutionize Your
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Farming</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empower your agricultural journey with AI-driven insights, weather forecasting, 
              smart crop planning, and expert guidance - all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/signup" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </Link>
              <button className="px-8 py-4 border-2 border-green-500 text-green-600 text-lg font-semibold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`mt-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">🌤️</div>
                      <h3 className="font-semibold text-gray-800">Weather Alert</h3>
                      <p className="text-sm text-gray-600">Rain expected in 2 hours</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">📅</div>
                      <h3 className="font-semibold text-gray-800">Crop Calendar</h3>
                      <p className="text-sm text-gray-600">Planting season starts</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">🤖</div>
                      <h3 className="font-semibold text-gray-800">AI Assistant</h3>
                      <p className="text-sm text-gray-600">Ready to help</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
