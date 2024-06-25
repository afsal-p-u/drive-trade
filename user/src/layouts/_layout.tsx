import { Footer, Navbar, SignIn, SignUp } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='relative'>
        <Navbar />
        <Outlet />
        <Footer />

        <SignUp />
    </div>
  )
}

export default Layout
