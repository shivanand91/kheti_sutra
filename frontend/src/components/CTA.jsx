import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500 to-emerald-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Transform Your Farming?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join Krishi Sutra today and experience the future of smart agriculture. 
          Start your free trial and see the difference AI can make.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/signup" 
            className="px-8 py-4 bg-white text-green-600 text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Start Free Trial
          </Link>
          <Link 
            to="/login" 
            className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
