import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './App'
import { ProductPage, SignUpPage } from './lazy'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<ProductPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Route>
  )
)

export default router
