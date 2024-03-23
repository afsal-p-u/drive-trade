import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router.tsx'
import axios from 'axios'
import { AuthContextProvider } from './contexts/AuthContext.tsx'

axios.defaults.baseURL = "http://localhost:5000"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
)
