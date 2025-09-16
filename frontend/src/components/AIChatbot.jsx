import React from 'react'

const AIChatbot = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500 to-emerald-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet Your AI Farming Assistant
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get instant answers to your farming questions with our intelligent chatbot that supports both voice and text communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎤</span>
                </div>
                <h3 className="text-xl font-semibold">Voice Interaction</h3>
              </div>
              <p className="text-white/90">Speak naturally to get instant farming advice, weather updates, and crop recommendations.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold">Text Chat</h3>
              </div>
              <p className="text-white/90">Type your questions and get detailed, expert-level responses about farming techniques and solutions.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold">Smart Learning</h3>
              </div>
              <p className="text-white/90">Our AI learns from your farm data to provide personalized recommendations and insights.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🤖</span>
                </div>
                <div className="bg-gray-100 rounded-2xl p-4 max-w-xs">
                  <p className="text-gray-800">Hello! I'm your AI farming assistant. How can I help you today?</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-green-500 rounded-2xl p-4 max-w-xs">
                  <p className="text-white">What's the best time to plant tomatoes in my area?</p>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">👤</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🤖</span>
                </div>
                <div className="bg-gray-100 rounded-2xl p-4 max-w-xs">
                  <p className="text-gray-800">Based on your location, the optimal planting time for tomatoes is mid-March to early April...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIChatbot
