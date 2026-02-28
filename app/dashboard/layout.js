import React from 'react'
import DashboardProvider from './provider'

function layout({children}) {
  return (
    <DashboardProvider>{children}</DashboardProvider>
  )
}

export default layout
