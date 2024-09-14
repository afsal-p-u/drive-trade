import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/router.tsx'
import { PopupContextProvider } from './contexts/PopupContext.tsx'
import { AuthContextProvider } from './contexts/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PopupContextProvider>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </PopupContextProvider>
)
