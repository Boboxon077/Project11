import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div>
            <Navbar />
            <main className='algin-element py-8'>
                <Outlet />
            </main>
            
        </div> 
    )
}

export default MainLayout