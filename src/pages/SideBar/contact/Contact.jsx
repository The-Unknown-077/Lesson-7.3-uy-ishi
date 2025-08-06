import React from 'react'
import { Outlet } from 'react-router-dom'
import About from '../../../components/About'

const Contact = () => {
  const tabs = [
    { label: 'Umumiy', to: '' },
    { label: 'Bog‘lanish formasi', to: 'statistics' }
  ]

  return (
    <div className="p-6">
      <About tabs={tabs} />
      <Outlet />
    </div>
  )
}

export default Contact
