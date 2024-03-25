import { Input } from '../components'
import { LoginAuthData } from '../utils/AuthData'

const Login = () => {
    return (
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
            <div className="w-[400px] px-7 py-5 border-[1px] shadow-sm">
                <h3 className="text-2xl text-center">Login</h3>
                
                <div className="mt-5">
                    {LoginAuthData.map((item, i) => (
                        <Input {...item} onchange={() => {}} key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Login