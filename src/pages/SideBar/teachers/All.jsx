import React from 'react'
import OverviewStats from '../../../components/OverviewStats'

const All = () => {
  const stats = [
    { title: 'O‘qituvchilar', value: '15', description: 'Jami o‘qituvchilar soni' },
  ]

  return (
    <div className="p-6">
      <OverviewStats stats={stats} />
    </div>
  )
}

export default All
