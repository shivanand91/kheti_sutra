import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How accurate is the weather forecasting?",
      answer: "Our weather forecasts use advanced AI models and multiple data sources to provide 95%+ accuracy for up to 7 days. We continuously improve our models based on local weather patterns and farmer feedback."
    },
    {
      question: "Can I use Krishi Sutra without internet?",
      answer: "While Krishi Sutra works best with internet connectivity, our mobile app offers offline features like crop calendar, basic soil testing guides, and cached weather data for up to 3 days."
    },
    {
      question: "How does the AI chatbot help with farming?",
      answer: "Our AI chatbot provides instant answers to farming questions, pest identification, disease diagnosis, fertilizer recommendations, and crop-specific advice. It learns from your farm data to give personalized suggestions."
    },
    {
      question: "Is my farm data secure?",
      answer: "Yes, we use enterprise-grade security with end-to-end encryption. Your farm data is never shared with third parties without your explicit consent. We comply with all data protection regulations."
    },
    {
      question: "What crops does Krishi Sutra support?",
      answer: "We support over 50+ major crops including rice, wheat, cotton, sugarcane, vegetables, fruits, and spices. Our database is continuously expanding based on farmer needs and regional requirements."
    },
    {
      question: "How much can I save using Krishi Sutra?",
      answer: "Farmers typically save 20-40% on fertilizer costs, reduce water usage by 15-25%, and increase crop yield by 15-30%. The exact savings depend on your current practices and implementation of our recommendations."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes! We offer comprehensive training through our blog, video tutorials, webinars, and 24/7 support. Pro and Enterprise users get priority support and dedicated account managers."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! You can cancel your subscription anytime with no cancellation fees. Your data remains accessible for 30 days after cancellation, and you can export all your farm data."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about Krishi Sutra and how it can help your farming.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <span className="text-green-600 text-xl">▼</span>
                </div>
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
