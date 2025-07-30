import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Calendar, CreditCard, Leaf, ArrowRight, CheckCircle, Users, MapPin } from 'lucide-react'

const LandingPage = () => {
  const benefits = [
    {
      icon: MapPin,
      title: 'Doorstep Pickup',
      description: 'Collection during office hours or weekends - fits your schedule perfectly'
    },
    {
      icon: Calendar,
      title: 'Auto-Scheduling',
      description: 'AI picks the best time based on your patterns. No manual coordination needed'
    },
    {
      icon: CreditCard,
      title: 'Earn Credits',
      description: 'Convert packaging into Swiggy credits or donate to green NGOs'
    },
    {
      icon: Leaf,
      title: 'Track Impact',
      description: 'See your real-time environmental impact and CO₂ savings'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-swiggy-orange to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Less Waste.<br />
                  More Rewards.<br />
                  <span className="text-orange-200">Perfect for Busy Lives.</span>
                </h1>
                <p className="text-xl sm:text-2xl mt-6 text-orange-100">
                  Turn your food delivery packaging into Swiggy credits — no extra effort needed.
                </p>
              </div>

              {/* Impact Tracker Preview */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Leaf className="w-6 h-6 text-eco-green" />
                  <span className="text-lg font-semibold">Your Environmental Impact</span>
                </div>
                <div className="text-3xl font-bold mb-2">6.4kg CO₂ saved</div>
                <div className="text-orange-200">Equivalent to planting 2 trees this month</div>
              </div>

              {/* CTA Button */}
              <Link
                to="/return"
                className="inline-flex items-center space-x-3 bg-white text-swiggy-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Schedule My First Return</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Quick Stats */}
              <div className="flex space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-orange-200 text-sm">Happy Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">2M+</div>
                  <div className="text-orange-200 text-sm">Containers Returned</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">₹15L+</div>
                  <div className="text-orange-200 text-sm">Credits Earned</div>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative animate-bounce-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  {/* Modern illustration placeholder - represents office-goer with Swiggy Genie */}
                  <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-4">
                      <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                        <Leaf className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="text-lg font-semibold">Professional → Genie Agent</div>
                    <div className="text-orange-200">Seamless handoff at your door</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-swiggy-dark mb-4">
              Built for Your Busy Lifestyle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand you're juggling work, family, and life. Swiggy Releaf fits seamlessly into your routine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-swiggy-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-swiggy-orange" />
                </div>
                <h3 className="text-xl font-semibold text-swiggy-dark mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-swiggy-dark mb-4">
              Three Taps. Done.
            </h2>
            <p className="text-xl text-gray-600">
              The fastest way to turn waste into rewards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Select Orders',
                description: 'Choose from your recent Swiggy orders with eligible containers'
              },
              {
                step: '02',
                title: 'Auto-Schedule',
                description: 'Our AI picks the perfect pickup time based on your routine'
              },
              {
                step: '03',
                title: 'Earn Rewards',
                description: 'Get instant Swiggy credits or donate to environmental causes'
              }
            ].map(({ step, title, description }, index) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-swiggy-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step}
                </div>
                <h3 className="text-xl font-semibold text-swiggy-dark mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
                {index < 2 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-swiggy-dark mb-4">
              Loved by Busy Professionals
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Software Engineer, Bangalore',
                quote: 'Perfect for my schedule. Pickup happens during my lunch break - zero disruption to work.',
                rating: 5
              },
              {
                name: 'Rajesh Kumar',
                role: 'Marketing Manager, Mumbai',
                quote: 'Earned ₹500 credits last month just from regular food orders. Wife is impressed!',
                rating: 5
              },
              {
                name: 'Anita Patel',
                role: 'Doctor, Delhi',
                quote: 'Finally, a way to be eco-friendly without adding to my endless to-do list.',
                rating: 5
              }
            ].map(({ name, role, quote, rating }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex space-x-1 mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-swiggy-orange rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{quote}"</p>
                <div>
                  <div className="font-semibold text-swiggy-dark">{name}</div>
                  <div className="text-sm text-gray-500">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-swiggy-orange text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Turn Waste into Rewards?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of busy professionals who are earning while being eco-friendly.
          </p>
          <Link
            to="/return"
            className="inline-flex items-center space-x-3 bg-white text-swiggy-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Start Your First Return</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LandingPage