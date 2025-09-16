import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import AIChatbot from '../components/AIChatbot'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import Pricing from '../components/Pricing'
import BlogPreview from '../components/BlogPreview'
import TechnologyStack from '../components/TechnologyStack'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AIChatbot />
      <Testimonials />
      <Stats />
      <Pricing />
      <BlogPreview />
      <TechnologyStack />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default LandingPage