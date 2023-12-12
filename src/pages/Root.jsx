import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='flex'>
        <Nav/>
        <div className='grow'>
            <Outlet />
        </div>
    </div>
  )
}
