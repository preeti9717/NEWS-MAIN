import { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="btn btn-primary position-fixed"
      style={{ bottom: '20px', right: '20px', zIndex: 1000, borderRadius: '50%', width: '50px', height: '50px' }}
    >
      ↑
    </button>
  ) : null
}

export default BackToTop