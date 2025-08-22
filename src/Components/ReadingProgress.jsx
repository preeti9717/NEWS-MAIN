import { useState, useEffect } from 'react'

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div
      className="position-fixed top-0 start-0 bg-primary"
      style={{
        height: '3px',
        width: `${progress}%`,
        zIndex: 1050,
        transition: 'width 0.1s ease'
      }}
    />
  )
}

export default ReadingProgress