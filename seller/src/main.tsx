import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'
import axios from 'axios'

axios.defaults.url = "http://localhost:5000/api"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
