import React from 'react'
import { Outlet } from 'react-router-dom'
import About from '../../../components/About'

const Users = () => {
  const tabs = [
    { label: 'Umumiy', to: '' },
    { label: 'Foydalanuvchilar statistikasi', to: 'users_statistics' }
  ]

  return (
    <div className="p-6">
      <About tabs={tabs} />
      <Outlet />
    </div>
  )
}

export default Users
