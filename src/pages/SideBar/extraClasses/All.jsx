import React from 'react'
import OverviewStats from '../../../components/OverviewStats'

const All = () => {
  const stats = [
    { title: 'Qo‘shimcha mashg‘ulotlar', value: '7', description: 'Faol kurslar' },
  ]

  return (
    <div className="p-6">
      <OverviewStats stats={stats} />
    </div>
  )
}

export default All
