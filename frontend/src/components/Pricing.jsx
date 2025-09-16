import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for small farmers getting started",
      features: [
        "Basic weather forecasts",
        "Crop calendar (3 crops)",
        "AI chatbot (10 queries/month)",
        "Basic soil testing tips",
        "Community support"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white",
      popular: false
    },
    {
      name: "Pro",
      price: "₹299",
      period: "per month",
      description: "Ideal for serious farmers and small farms",
      features: [
        "Advanced weather forecasts",
        "Unlimited crop calendar",
        "AI chatbot (unlimited queries)",
        "Detailed soil analysis",
        "Priority support",
        "Crop analytics dashboard",
        "Mobile app access"
      ],
      buttonText: "Start Pro Trial",
      buttonStyle: "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700",
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹999",
      period: "per month",
      description: "For large farms and agricultural businesses",
      features: [
        "Everything in Pro",
        "Custom AI models",
        "Multi-farm management",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "24/7 phone support"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700",
      popular: false
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade as your farming needs grow. All plans include our core features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/signup" 
                className={`w-full px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-center block ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include a 14-day free trial</p>
          <p className="text-sm text-gray-500">
            Need a custom solution? <span className="text-green-600 font-semibold cursor-pointer hover:underline">Contact our team</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
