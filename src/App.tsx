import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/footer/Footer'
import Header from './layouts/header/Header'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
