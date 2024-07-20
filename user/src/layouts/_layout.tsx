import { ChangePassword, Footer, ForgotPassword, Navbar, OTPVerification, SignIn, SignUp } from '../components'
import { Outlet } from 'react-router-dom'
import { usePopupContext } from '../contexts/PopupContext'

const Layout = () => {
  const { component }: any = usePopupContext();

  return (
    <div className='relative'>
        <Navbar />
        <Outlet />
        <Footer />

      {component === 'sign-up' && (
        <SignUp />
      )}
      {component === 'sign-in' && (
        <SignIn />
      )}
      {component === 'otp' && (
        <OTPVerification />
      )}
      
        {/* <ForgotPassword /> */}
        {/* <OTPVerification /> */}
        {/* <ChangePassword /> */}
    </div>
  )
}

export default Layout
