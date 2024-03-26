import { Link } from 'react-router-dom'
import { Input } from '../components'
import { loginAuthData } from '../utils/AuthData'

const Login = () => {
    return (
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
            <div className="rounded-md w-[400px] px-7 py-5 border-[1px] shadow-sm border-t-[3px] border-t-red-500">
                <h3 className="text-2xl text-center font-bold">LOGIN</h3>
                
                <div className="mt-5">
                    {loginAuthData.map((item, i) => (
                        <Input {...item} onchange={() => {}} key={i} />
                    ))}
                </div>
                <div className="mt-2">
                    <p className='text-xs text-right text-gray-500'>Forgot password?</p>
                    <Link to="/register">
                        <p className='text-xs text-right mt-1 text-gray-500'>Don't have an account?</p>
                    </Link>
                </div>
                <div className="mt-8 flex justify-center">
                    <button className='font-medium px-5 py-1 rounded-sm text-white bg-red-500 border-[1px] text-sm hover:border-red-500 hover:bg-transparent hover:text-red-500'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login