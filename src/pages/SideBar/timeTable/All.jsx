import React from 'react'
import OverviewStats from '../../../components/OverviewStats'

const All = () => {
  const stats = [
    { title: 'Jadval', value: '8', description: 'Haftalik darslar jadvali' },
  ]

  return (
    <div className="p-6">
      <OverviewStats stats={stats} />
    </div>
  )
}

export default All
