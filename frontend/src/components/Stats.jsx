import React from 'react'

const Stats = () => {
  const stats = [
    { number: "500+", label: "Active Farmers" },
    { number: "10k+", label: "Crops Monitored" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "AI Support" }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Farmers Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of successful farmers who have transformed their agricultural practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
