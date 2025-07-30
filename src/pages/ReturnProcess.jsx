import React, { useState } from 'react'
import { Calendar, Clock, CheckCircle, Package, Sparkles, RotateCcw, MapPin, Zap } from 'lucide-react'

const ReturnProcess = () => {
  const [selectedOrders, setSelectedOrders] = useState([])
  const [scheduledPickups, setScheduledPickups] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [recurringPickup, setRecurringPickup] = useState(false)

  const recentOrders = [
    {
      id: 1,
      restaurant: 'Domino\'s Pizza',
      date: '2 days ago',
      items: 2,
      containers: 'Pizza box, Garlic bread container',
      credits: 25,
      co2Saved: '0.8kg'
    },
    {
      id: 2,
      restaurant: 'McDonald\'s',
      date: '3 days ago',
      items: 3,
      containers: 'Burger boxes (2), Fries container',
      credits: 30,
      co2Saved: '1.2kg'
    },
    {
      id: 3,
      restaurant: 'Subway',
      date: '5 days ago',
      items: 1,
      containers: 'Sub wrapper, Cookie bag',
      credits: 15,
      co2Saved: '0.5kg'
    },
    {
      id: 4,
      restaurant: 'KFC',
      date: '1 week ago',
      items: 4,
      containers: 'Chicken bucket, Side containers (3)',
      credits: 40,
      co2Saved: '1.5kg'
    }
  ]

  const toggleOrderSelection = (orderId) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    )
  }

  const handleAutoSchedule = () => {
    if (selectedOrders.length === 0) return

    const newPickup = {
      id: Date.now(),
      orders: selectedOrders.map(id => recentOrders.find(order => order.id === id)),
      scheduledTime: 'Tomorrow, 2:00 PM - 4:00 PM',
      aiReason: 'Based on your usual home schedule',
      totalCredits: selectedOrders.reduce((sum, id) => {
        const order = recentOrders.find(o => o.id === id)
        return sum + order.credits
      }, 0)
    }

    setScheduledPickups(prev => [...prev, newPickup])
    setSelectedOrders([])
    setShowSuccess(true)

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const toggleRecurringPickup = () => {
    setRecurringPickup(!recurringPickup)
    if (!recurringPickup) {
      // Simulate setting up recurring pickup
      setTimeout(() => {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-light-gray pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-swiggy-dark mb-4">
            Schedule Container Return
          </h1>
          <p className="text-lg text-gray-600">
            Select orders and let our AI pick the perfect pickup time
          </p>
        </div>

        {/* Success Animation */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 text-center animate-bounce-in">
              <div className="w-16 h-16 bg-eco-green rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-swiggy-dark mb-2">Pickup Scheduled!</h3>
              <p className="text-gray-600">
                {recurringPickup ? 'Recurring pickup activated' : 'Your containers will be collected tomorrow'}
              </p>
              <div className="flex justify-center mt-4">
                <Sparkles className="w-6 h-6 text-swiggy-orange animate-pulse" />
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <button
            onClick={toggleRecurringPickup}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
              recurringPickup
                ? 'bg-eco-green border-eco-green text-white'
                : 'bg-white border-gray-200 hover:border-swiggy-orange'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                recurringPickup ? 'bg-white/20' : 'bg-eco-green/10'
              }`}>
                <RotateCcw className={`w-6 h-6 ${recurringPickup ? 'text-white' : 'text-eco-green'}`} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Recurring Pickup</h3>
                <p className={`text-sm ${recurringPickup ? 'text-white/80' : 'text-gray-600'}`}>
                  Every Sunday at 3 PM
                </p>
              </div>
            </div>
          </button>

          <div className="p-6 bg-white rounded-2xl border-2 border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-swiggy-orange/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-swiggy-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-swiggy-dark">AI Scheduling</h3>
                <p className="text-sm text-gray-600">Picks optimal pickup times</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-swiggy-dark mb-2">Recent Orders with Containers</h2>
            <p className="text-gray-600">Select orders to schedule pickup</p>
          </div>

          <div className="space-y-0">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className={`p-6 border-b border-gray-100 last:border-b-0 cursor-pointer transition-all duration-300 ${
                  selectedOrders.includes(order.id)
                    ? 'bg-swiggy-orange/5 border-l-4 border-l-swiggy-orange'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleOrderSelection(order.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                      selectedOrders.includes(order.id)
                        ? 'bg-swiggy-orange border-swiggy-orange'
                        : 'border-gray-300'
                    }`}>
                      {selectedOrders.includes(order.id) && (
                        <CheckCircle className="w-6 h-6 text-white" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg text-swiggy-dark">{order.restaurant}</h3>
                        <span className="text-sm text-gray-500">{order.date}</span>
                      </div>
                      <div className="text-gray-600 text-sm mb-2">
                        <Package className="w-4 h-4 inline mr-1" />
                        {order.containers}
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-swiggy-orange font-medium">₹{order.credits} credits</span>
                        <span className="text-eco-green">{order.co2Saved} CO₂ saved</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-swiggy-dark">{order.items}</div>
                    <div className="text-sm text-gray-500">items</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        {selectedOrders.length > 0 && (
          <div className="bg-white rounded-2xl p-6 shadow-lg animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-swiggy-dark">
                  {selectedOrders.length} order{selectedOrders.length > 1 ? 's' : ''} selected
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>
                    Total credits: ₹{selectedOrders.reduce((sum, id) => {
                      const order = recentOrders.find(o => o.id === id)
                      return sum + order.credits
                    }, 0)}
                  </span>
                  <span>
                    CO₂ saved: {selectedOrders.reduce((sum, id) => {
                      const order = recentOrders.find(o => o.id === id)
                      return sum + parseFloat(order.co2Saved)
                    }, 0).toFixed(1)}kg
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleAutoSchedule}
              className="w-full bg-swiggy-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <Calendar className="w-5 h-5" />
              <span>Auto-Schedule Pickup</span>
              <Sparkles className="w-5 h-5" />
            </button>

            <div className="mt-4 p-4 bg-light-gray rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Zap className="w-4 h-4 text-swiggy-orange" />
                <span>AI will pick the best time based on your usual schedule</span>
              </div>
            </div>
          </div>
        )}

        {/* Scheduled Pickups */}
        {scheduledPickups.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-swiggy-dark mb-2">Scheduled Pickups</h2>
              <p className="text-gray-600">Your upcoming container collections</p>
            </div>

            <div className="space-y-0">
              {scheduledPickups.map((pickup) => (
                <div key={pickup.id} className="p-6 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-eco-green rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-swiggy-dark">{pickup.scheduledTime}</h3>
                          <p className="text-sm text-gray-600 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {pickup.aiReason}
                          </p>
                        </div>
                      </div>

                      <div className="ml-13 space-y-2">
                        {pickup.orders.map((order) => (
                          <div key={order.id} className="text-sm text-gray-600">
                            <span className="font-medium">{order.restaurant}</span> - {order.containers}
                          </div>
                        ))}
                        <div className="text-swiggy-orange font-medium">
                          Total: ₹{pickup.totalCredits} credits
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-eco-green font-medium mb-1">Confirmed</div>
                      <div className="text-xs text-gray-500">Pickup #1024</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="mt-8 bg-gradient-to-r from-swiggy-orange/10 to-eco-green/10 rounded-2xl p-6">
          <h3 className="font-semibold text-lg text-swiggy-dark mb-3">💡 Pro Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Clean containers increase credit value by up to 20%</li>
            <li>• Recurring pickups earn bonus credits every month</li>
            <li>• Combine multiple orders for more efficient pickup</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ReturnProcess