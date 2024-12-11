import React from 'react'
import Header from '../components/DashBoardComponents/Header'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
      <div>
          <Header />
          <Outlet />
    </div>
  )
}

export default DashboardLayout