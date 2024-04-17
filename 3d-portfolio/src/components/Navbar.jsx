import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        
        <NavLink to="/" className="w-40 h-20 rounded-lg bg-black items-center justify-center flex font-bold  shadow-md">
            <p className="blue-gradient_text">
                THE MAGICIAN
            </p>

        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to="/about" className={({isActive})=>isActive?'text-blue-500':'text-black'}>
              about
          </NavLink>
          <NavLink to="/projects" className={({isActive})=>isActive?'text-blue-500':'text-black'}>
              projects
          </NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?'text-blue-500':'text-black'}>
              contact
          </NavLink>
          <NavLink to="/classes" className={({isActive})=>isActive?'text-blue-500':'text-black'}>
              classes
          </NavLink>
              
        </nav>
    </header>
  )
}

export default Navbar