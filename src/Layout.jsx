
import { Outlet } from 'react-router-dom'
import AppNavbar  from './Components/AppNavbar'

function Layout() {
  return (
    <>
    <AppNavbar/>
    <Outlet />
    
    </>
  )
}

export default Layout