import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Library, GraduationCap, Code, Play, FileCode2, Bot, Menu, X, User } from 'lucide-react'
import './Layout.css'

export default function Layout({ children }) {
  const location = useLocation()
  const [navOpen, setNavOpen] = useState(false)

  const isActive = (to) =>
    location.pathname === to || (to !== '/' && location.pathname.startsWith(to + '/'))

  const navLink = (to, icon, label) => (
    <Link
      to={to}
      className={`sidebar-link ${isActive(to) ? 'active' : ''}`}
      onClick={() => setNavOpen(false)}
    >
      <span className="sidebar-icon">{icon}</span>
      <span className="sidebar-label">{label}</span>
    </Link>
  )

  return (
    <div className="layout">
      {/* Mobile Toggle Button */}
      <button className="mobile-nav-toggle" onClick={() => setNavOpen(o => !o)}>
        <Menu size={20} /> <span style={{ marginLeft: 8 }}>Menu</span>
      </button>
      
      {/* Sidebar Navigation */}
      <aside className={`sidebar ${navOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <Link to="/" className="logo">
            <span className="logo-text" style={{color: '#fff'}}>LearnPlus</span>
          </Link>
          <button className="mobile-close" onClick={() => setNavOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="sidebar-nav">
          {navLink('/', <Home size={20} />, 'Home')}
          {navLink('/profile', <User size={20} />, 'My Profile')}
          {navLink('/courses', <Library size={20} />, 'Course Library')}
          {navLink('/bonus', <GraduationCap size={20} />, 'Bonus Courses')}
          {navLink('/playground', <Play size={20} />, 'Playground')}
          {navLink('/snippets', <FileCode2 size={20} />, 'Code Snippets')}
          {navLink('/assistant', <Bot size={20} />, 'Galaxy AI Doubts')}
        </nav>
      </aside>

      {navOpen && <div className="sidebar-overlay" onClick={() => setNavOpen(false)}></div>}

      <div className="main-wrapper">
        {/* Dynamic Page Content */}
        <main className="main">{children}</main>
        
        <footer className="footer" style={{textAlign: 'center', color: '#64748b', fontSize: '0.85rem', padding: '1.5rem', background: '#f8f9fa'}}>
          LearnPlus – Comprehensive learning programs & classes.
        </footer>
      </div>
    </div>
  )
}
