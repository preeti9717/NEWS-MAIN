import { useState, useEffect } from 'react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved) {
      setDarkMode(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="btn btn-outline-secondary position-fixed"
      style={{ top: '80px', right: '20px', zIndex: 1000 }}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}

export default DarkModeToggle