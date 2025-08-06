import React from 'react'
import { Outlet } from 'react-router-dom'
import About from '../../../components/About'

const Extras = () => {
  const tabs = [
    { label: 'Umumiy', to: '' },
    { label: 'Qo‘shimcha xizmatlar', to: 'statistics' }
  ]

  return (
    <div className="p-6">
      <About tabs={tabs} />
      <Outlet />
    </div>
  )
}

export default Extras
