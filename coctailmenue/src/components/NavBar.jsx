import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css'
function NavBar() {
  return (
    <header  >
        <nav className={classes.nav}>
           <span className={classes.logo}>MixMaster</span>
           <div className={classes.links}>
              <NavLink to='/' className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
                Home
                </NavLink>
              
              
                <NavLink to='/about' className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
                    About
                </NavLink>

              <NavLink to='/newsletter' className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
              Newsletter
            </NavLink>  
          </div>
        </nav>
    </header>
  )
}

export default NavBar
