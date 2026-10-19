import { Route, Routes } from 'react-router-dom'
import Layout from './page/layout.jsx'
import Home from './page/home.jsx'
import About from './page/about.jsx'
import Services from './page/services.jsx'
import Portfolio from './page/portfolio.jsx'
import Contact from './page/contact.jsx'
import NotFound from './page/notfound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
