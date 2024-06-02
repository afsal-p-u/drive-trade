import { SignIn, SignUp } from "../components"
import cars from '../assets/cars.webp'
import { useAuthControlContext } from "../contexts/AuthControlContext"

const LandingPage = () => {
  const { authControl }: any = useAuthControlContext()
  
  return (
    <div className="bg-primary min-h-[89vh] relative">
      <div className=" mt-5">
        <div className="h-[80vh] px-[20px]">
          <img src={cars} alt="" className="w-full h-full object-cover" />
        </div>

        {/* search */}
        <div className="px-[20px]"></div>

        {authControl === "sign-up" && (
          <SignUp />  
        )}

        {authControl === "sign-in" && (
          <SignIn />  
        )}
      </div>
    </div>
  )
}

export default LandingPage
