import React from 'react'
import OverviewStats from '../../../components/OverviewStats'

const All = () => {
  const stats = [
    { title: 'O‘quv sifat ko‘rsatkichi', value: '85%', description: 'O‘quvchilarning o‘zlashtirishi' },
  ]

  return (
    <div className="p-6">
      <OverviewStats stats={stats} />
    </div>
  )
}

export default All
