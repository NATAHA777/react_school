import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Root() {
  return (
    <div className='flex bg-slate-100'>
        <Nav/>
        <div className='grow flex flex-col h-screen'>
          <Header />
          <div className='grow overflow-y-auto'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}
