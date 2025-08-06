import React, { useState } from 'react'

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-2 text-sm sm:text-base font-medium transition-all duration-200 ${
              activeTab === index
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-indigo-600'
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      <div>{tabs[activeTab]?.content}</div>
    </div>
  )
}

export default Tabs
