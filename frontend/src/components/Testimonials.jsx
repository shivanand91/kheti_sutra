import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Punjab, India",
      crop: "Wheat Farmer",
      image: "👨‍🌾",
      rating: 5,
      text: "Krishi Sutra has revolutionized my farming. The weather predictions are spot-on and the AI chatbot helped me increase my wheat yield by 30% this season!"
    },
    {
      name: "Priya Sharma",
      location: "Maharashtra, India", 
      crop: "Cotton Farmer",
      image: "👩‍🌾",
      rating: 5,
      text: "The smart calendar feature is incredible! It tells me exactly when to plant, water, and harvest. My cotton quality has improved significantly."
    },
    {
      name: "Amit Patel",
      location: "Gujarat, India",
      crop: "Rice Farmer", 
      image: "👨‍🌾",
      rating: 5,
      text: "Soil testing recommendations helped me optimize fertilizer use. I saved 40% on fertilizer costs while increasing my rice production by 25%."
    },
    {
      name: "Sunita Devi",
      location: "Uttar Pradesh, India",
      crop: "Vegetable Farmer",
      image: "👩‍🌾", 
      rating: 5,
      text: "The blogs and tutorials are so helpful! I learned new organic farming techniques that doubled my vegetable production."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Farmers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from farmers who have transformed their agricultural practices with Krishi Sutra.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{testimonial.image}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.crop}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
