import React, { useState } from 'react'
import { CreditCard, Award, TrendingUp, Heart, Gift, Leaf, ArrowRight, Star, Target, Calendar } from 'lucide-react'

const RewardsDashboard = () => {
  const [selectedReward, setSelectedReward] = useState(null)

  const currentUser = {
    name: 'Priya',
    credits: 340,
    tier: 'Delivery Guardian',
    nextTier: 'Eco Leader',
    progressToNext: 65,
    monthlyReturns: 23,
    totalCO2Saved: 14.6,
    streakDays: 12
  }

  const tiers = [
    {
      name: 'Orange Rookie',
      minReturns: 0,
      benefits: ['5% bonus credits', 'Basic eco-tips'],
      color: 'bg-orange-200',
      textColor: 'text-orange-800'
    },
    {
      name: 'Delivery Guardian',
      minReturns: 15,
      benefits: ['10% bonus credits', 'Priority pickup slots', 'Monthly eco-report'],
      color: 'bg-swiggy-orange',
      textColor: 'text-white',
      current: true
    },
    {
      name: 'Eco Leader',
      minReturns: 30,
      benefits: ['15% bonus credits', 'VIP support', 'Carbon certificate', 'Early access'],
      color: 'bg-eco-green',
      textColor: 'text-white'
    }
  ]

  const rewardSuggestions = [
    {
      id: 1,
      title: 'Swiggy One Subscription',
      description: '1 month free delivery',
      credits: 99,
      category: 'subscription',
      popular: true
    },
    {
      id: 2,
      title: '₹100 Food Credit',
      description: 'Use on any restaurant',
      credits: 100,
      category: 'food'
    },
    {
      id: 3,
      title: 'Instamart Credits',
      description: '₹75 grocery shopping',
      credits: 75,
      category: 'grocery'
    },
    {
      id: 4,
      title: 'Plant a Tree',
      description: 'Donate to forest restoration',
      credits: 50,
      category: 'donation',
      impact: '1 tree planted'
    }
  ]

  const donationCauses = [
    {
      id: 1,
      name: 'Ocean Cleanup Project',
      description: 'Remove plastic waste from oceans',
      impact: '1kg plastic removed per ₹25',
      icon: '🌊'
    },
    {
      id: 2,
      name: 'Urban Forest Initiative',
      description: 'Plant trees in metropolitan cities',
      impact: '1 tree planted per ₹50',
      icon: '🌳'
    },
    {
      id: 3,
      name: 'Clean Energy Fund',
      description: 'Support renewable energy projects',
      impact: '1kWh clean energy per ₹15',
      icon: '⚡'
    }
  ]

  const recentActivity = [
    {
      date: '2 days ago',
      action: 'Container return',
      credits: '+25',
      items: 'Pizza box, Garlic bread container'
    },
    {
      date: '5 days ago',
      action: 'Bonus earned',
      credits: '+15',
      items: 'Tier bonus (10%)'
    },
    {
      date: '1 week ago',
      action: 'Donated to Ocean Cleanup',
      credits: '-50',
      items: '2kg plastic waste removed'
    }
  ]

  return (
    <div className="min-h-screen bg-light-gray pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-swiggy-dark mb-4">
            Rewards Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Track your credits, tier progress, and environmental impact
          </p>
        </div>

        {/* Credits & Tier Overview */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Credits Balance */}
          <div className="bg-gradient-to-br from-swiggy-orange to-orange-600 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <CreditCard className="w-8 h-8" />
              <div className="text-right">
                <div className="text-sm opacity-90">Available Credits</div>
                <div className="text-3xl font-bold">₹{currentUser.credits}</div>
              </div>
            </div>
            <div className="text-orange-200 text-sm">
              Earned this month: ₹{Math.floor(currentUser.credits * 0.6)}
            </div>
          </div>

          {/* Current Tier */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-swiggy-orange rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Current Tier</div>
                <div className="text-xl font-bold text-swiggy-dark">{currentUser.tier}</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress to {currentUser.nextTier}</span>
                <span className="font-medium">{currentUser.progressToNext}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-eco-green h-2 rounded-full transition-all duration-500"
                  style={{ width: `${currentUser.progressToNext}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500">
                {Math.ceil((30 - currentUser.monthlyReturns))} more returns to next tier
              </div>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-eco-green rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">CO₂ Saved</div>
                <div className="text-xl font-bold text-swiggy-dark">{currentUser.totalCO2Saved}kg</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <div className="flex items-center space-x-2 mb-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{currentUser.streakDays}-day return streak</span>
              </div>
              <div>Equivalent to planting {Math.floor(currentUser.totalCO2Saved / 3)} trees</div>
            </div>
          </div>
        </div>

        {/* Tier System */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-swiggy-dark mb-2">Tier System</h2>
            <p className="text-gray-600">Unlock better rewards with more returns</p>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`rounded-xl p-6 border-2 transition-all duration-300 ${
                    tier.current 
                      ? 'border-swiggy-orange shadow-lg transform scale-105' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${tier.color} ${tier.textColor}`}>
                    {tier.current && <Award className="w-4 h-4 mr-1" />}
                    {tier.name}
                  </div>
                  
                  <div className="text-2xl font-bold text-swiggy-dark mb-2">
                    {tier.minReturns}+ returns/month
                  </div>
                  
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-swiggy-orange rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {tier.current && (
                    <div className="mt-4 text-sm text-swiggy-orange font-medium">
                      ✨ Current Tier
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reward Suggestions */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-swiggy-dark mb-2">Suggested Rewards</h2>
            <p className="text-gray-600">Perfect ways to use your ₹{currentUser.credits} credits</p>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rewardSuggestions.map((reward) => (
                <div
                  key={reward.id}
                  className="border border-gray-200 rounded-xl p-4 hover:border-swiggy-orange transition-all duration-300 cursor-pointer relative"
                  onClick={() => setSelectedReward(reward)}
                >
                  {reward.popular && (
                    <div className="absolute -top-2 -right-2 bg-swiggy-orange text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  
                  <div className="mb-3">
                    <h3 className="font-semibold text-swiggy-dark mb-1">{reward.title}</h3>
                    <p className="text-sm text-gray-600">{reward.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-swiggy-orange">₹{reward.credits}</div>
                      {reward.impact && (
                        <div className="text-xs text-eco-green">{reward.impact}</div>
                      )}
                    </div>
                    
                    <button 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentUser.credits >= reward.credits
                          ? 'bg-swiggy-orange text-white hover:bg-orange-600'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={currentUser.credits < reward.credits}
                    >
                      {currentUser.credits >= reward.credits ? 'Redeem' : 'Need more'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Donation Options */}
          <div className="bg-white rounded-2xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-swiggy-dark mb-2">Donate Credits</h2>
              <p className="text-gray-600">Turn credits into environmental impact</p>
            </div>

            <div className="p-6 space-y-4">
              {donationCauses.map((cause) => (
                <div key={cause.id} className="border border-gray-200 rounded-xl p-4 hover:border-eco-green transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{cause.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-swiggy-dark mb-1">{cause.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{cause.description}</p>
                      <div className="text-sm text-eco-green font-medium">{cause.impact}</div>
                    </div>
                    <button className="px-4 py-2 bg-eco-green text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                      Donate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-swiggy-dark mb-2">Recent Activity</h2>
              <p className="text-gray-600">Your latest credit transactions</p>
            </div>

            <div className="p-6 space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <h3 className="font-medium text-swiggy-dark">{activity.action}</h3>
                    <p className="text-sm text-gray-600">{activity.items}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                  <div className={`font-bold ${
                    activity.credits.startsWith('+') ? 'text-eco-green' : 'text-orange-600'
                  }`}>
                    {activity.credits}
                  </div>
                </div>
              ))}

              <button className="w-full mt-4 text-swiggy-orange font-medium text-sm hover:underline">
                View all transactions
              </button>
            </div>
          </div>
        </div>

        {/* Achievement Banner */}
        <div className="mt-8 bg-gradient-to-r from-swiggy-orange to-eco-green text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">🎉 Achievement Unlocked!</h3>
              <p className="opacity-90">You've reached {currentUser.monthlyReturns} returns this month. Keep going to unlock Eco Leader status!</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{currentUser.monthlyReturns}/30</div>
              <div className="text-sm opacity-75">Returns</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RewardsDashboard