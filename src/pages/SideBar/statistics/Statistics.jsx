import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import About from '../../../components/About'

const Statistics = () => {
  const location = useLocation()

  const tabs = [
    { label: 'Umumiy', to: '' },
    { label: 'O‘qituvchilar', to: '/statistics/teachers' },
  ]

  return (
    <div className="p-6">
      <About tabs={tabs} />
      <Outlet />
    </div>
  )
}

export default Statistics
