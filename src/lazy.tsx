import { lazy } from 'react'

const ProductPage = lazy(() => import('./pages/product/ProductPage'))
const SignUpPage = lazy(() => import('./pages/sign-up/SignUpPage'))

export { ProductPage, SignUpPage }
