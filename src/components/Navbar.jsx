import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Leaf, Award, RotateCcw } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Leaf },
    { path: '/return', label: 'Return', icon: RotateCcw },
    { path: '/rewards', label: 'Rewards', icon: Award }
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-swiggy-orange rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-swiggy-dark">
              Swiggy <span className="text-swiggy-orange">Releaf</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'bg-swiggy-orange text-white'
                    : 'text-swiggy-dark hover:bg-light-gray'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-light-gray transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-swiggy-dark" />
              ) : (
                <Menu className="w-6 h-6 text-swiggy-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === path
                      ? 'bg-swiggy-orange text-white'
                      : 'text-swiggy-dark hover:bg-light-gray'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar