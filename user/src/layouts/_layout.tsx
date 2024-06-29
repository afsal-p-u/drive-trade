import { ChangePassword, Footer, ForgotPassword, Navbar, OTPVerification, SignIn, SignUp } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='relative'>
        <Navbar />
        <Outlet />
        <Footer />

        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <ForgotPassword /> */}
        {/* <OTPVerification /> */}
        {/* <ChangePassword /> */}
    </div>
  )
}

export default Layout
