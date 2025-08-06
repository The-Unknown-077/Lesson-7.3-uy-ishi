import React from 'react'
import OverviewStats from '../../../components/OverviewStats'

const All = () => {
  const stats = [
    { title: 'Kitoblar', value: '12', description: 'Umumiy kitoblar soni' },
  ]

  return (
    <div className="p-6">
      <OverviewStats stats={stats} />
    </div>
  )
}

export default All
