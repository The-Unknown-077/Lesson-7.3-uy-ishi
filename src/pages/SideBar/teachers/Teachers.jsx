import React from 'react'
import { Outlet } from 'react-router-dom'
import About from '../../../components/About'

const Teachers = () => {
  const tabs = [
    { label: 'Umumiy', to: '' },
    { label: 'Faol o‘qituvchilar', to: 'statistics' }
  ]

  return (
    <div className="p-6">
      <About tabs={tabs} />
      <Outlet />
    </div>
  )
}

export default Teachers
