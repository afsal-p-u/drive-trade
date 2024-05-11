import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'
import axios from 'axios'
import { AuthContextProvider } from './contexts/AuthContext.tsx'

axios.defaults.baseURL = "http://localhost:5000/api"
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
)
