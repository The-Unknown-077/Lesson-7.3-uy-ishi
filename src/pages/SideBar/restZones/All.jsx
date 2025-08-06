import React from 'react'
import OverviewStats from '../../../components/OverviewStats'

const All = () => {
  const stats = [
    { title: 'Dam olish zonalari', value: '3', description: 'Zamonaviy dam olish joylari' },
  ]

  return (
    <div className="p-6">
      <OverviewStats stats={stats} />
    </div>
  )
}

export default All
