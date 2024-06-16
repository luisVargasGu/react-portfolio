import { Outlet } from 'react-router-dom'
import React from 'react'
import './index.scss'

const Playground = () => {
  return (
    <div className="playground">
      <Outlet />
    </div>
  )
}

export default Playground
