import React from 'react'
import { Outlet } from 'react-router-dom'
import About from '../../../components/About'

const RestZones = () => {
  const tabs = [
    { label: 'Umumiy', to: '' },
    { label: 'Dam olish zonalari', to: 'statistics' }
  ]

  return (
    <div className="p-6">
      <About tabs={tabs} />
      <Outlet />
    </div>
  )
}

export default RestZones
