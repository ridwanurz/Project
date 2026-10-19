import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'
import FloatingCta from '../components/FloatingCta.jsx'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ink-950">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  )
}

export default Layout
