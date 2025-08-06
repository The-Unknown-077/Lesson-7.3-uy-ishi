import React from 'react'

const OverviewStats = ({stats}) => {
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {stats? stats.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow p-4 rounded text-center hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-3xl text-indigo-700 font-bold">{item.value}</p>
          <p className="text-gray-500">{item.description}</p>
        </div>
      ))
      :
      <div className="flex justify-center items-center">
        <p className='text-center text-slate-500 text-[22px]'>Theres no information yet :(</p>
      </div>
    }
    </div>
  )
}

export default OverviewStats
