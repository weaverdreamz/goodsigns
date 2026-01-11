import { useState, useEffect } from 'react'
import './App.scss'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'



function App() {
     const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // prevent background scroll when mobile nav is open
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) {
      window.addEventListener('keydown', onKey)
    }
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <div className={`app-root ${menuOpen ? 'menu-open' : ''}`}>
      <header className="site-header">
        <div className="brand">
          <Link to="/" className="logo">JOSEPH PORTFOLIO</Link>
        </div>

        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>

        <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
          <div className="nav-spacer" aria-hidden="true" />
          <div className="nav-content">
            <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
            <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
            <Link onClick={() => setMenuOpen(false)} to="/projects">Projects</Link>
            <Link onClick={() => setMenuOpen(false)} to="/skills">Skills</Link>
            <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>
          </div>
        </nav>
        {/* backdrop sits under the nav but above page content; clicking it closes menu */}
        <div
          className={`backdrop ${menuOpen ? 'show' : ''}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        />
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />}/>
          
        </Routes>
      </main>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} Joseph Una — Built with React + Vite</small>
      </footer>
    </div>
  )

}

export default App
