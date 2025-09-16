import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-green-400 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-gray-900">🐎</span>
          </div>
          <span className="text-xl font-bold">uma.moe</span>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:text-teal-400 transition-colors">📊 Inheritance</a>
          <a href="#" className="hover:text-teal-400 transition-colors">🃏 Support Cards</a>
          <a href="#" className="hover:text-teal-400 transition-colors">📋 Tierlist</a>
          <a href="#" className="hover:text-teal-400 transition-colors">🕒 Timeline</a>
          <a href="#" className="hover:text-teal-400 transition-colors">🔧 Tools</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-16">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-teal-400 via-green-400 to-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
            <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-4xl">🐎</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
          uma.moe
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-400 mb-16 text-center max-w-md">
          Umamusume resource hub for the global version
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-8">
          {/* Inheritance Card */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer group">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-teal-400 transition-colors">Inheritance</h3>
            </div>
            <p className="text-gray-400">Browse the Inheritance Database</p>
          </div>

          {/* Support Cards */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer group">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🃏</span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-teal-400 transition-colors">Support Cards</h3>
            </div>
            <p className="text-gray-400">Search the Support Card Database</p>
          </div>

          {/* Tierlists */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer group">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-teal-400 transition-colors">Tierlists</h3>
            </div>
            <p className="text-gray-400">Support Card Tierlist</p>
          </div>

          {/* Timeline */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer group">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">🕒</span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-teal-400 transition-colors">Timeline</h3>
            </div>
            <p className="text-gray-400">Estimated Release Schedule</p>
          </div>
        </div>

        {/* Tools & Analytics Card */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg p-6 hover:from-orange-600 hover:to-yellow-600 transition-all cursor-pointer group max-w-md w-full">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <span className="text-xl">🔧</span>
            </div>
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-semibold text-white">Tools & Analytics</h3>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">NEW</span>
            </div>
          </div>
          <p className="text-white text-opacity-90">Advanced tools and statistics</p>
        </div>
      </main>
    </div>
  )
}

export default App
