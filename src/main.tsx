import 'bootstrap/dist/css/bootstrap.min.css'

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './routes.tsx'

import './assets/css/global.css'
import './assets/css/reset.css'

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>
)
