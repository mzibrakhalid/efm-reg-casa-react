import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
export default function Menu() {
  return (  <>
    <nav>
    <NavLink to="/Q3" > Q3 </NavLink>|
    <NavLink to="/Q4" > Q4 </NavLink>|
    <NavLink to="/Q5" > Q5 </NavLink>|
    <NavLink to="/Q6" > Q6 </NavLink>|
  
   </nav>
    <Outlet/>
    </>
  )
}
