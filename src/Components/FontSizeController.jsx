import { useState, useEffect } from 'react'

const FontSizeController = () => {
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    const savedSize = localStorage.getItem('fontSize')
    if (savedSize) {
      setFontSize(parseInt(savedSize))
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`
    localStorage.setItem('fontSize', fontSize.toString())
  }, [fontSize])

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2)
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2)
    }
  }

  const resetFontSize = () => {
    setFontSize(16)
  }

  return (
    <div className="position-fixed" style={{ bottom: '80px', right: '20px', zIndex: 1000 }}>
      <div className="btn-group-vertical" role="group">
        <button 
          className="btn btn-outline-secondary btn-sm" 
          onClick={increaseFontSize}
          disabled={fontSize >= 24}
          title="Increase font size"
        >
          A+
        </button>
        <button 
          className="btn btn-outline-secondary btn-sm" 
          onClick={resetFontSize}
          title="Reset font size"
        >
          A
        </button>
        <button 
          className="btn btn-outline-secondary btn-sm" 
          onClick={decreaseFontSize}
          disabled={fontSize <= 12}
          title="Decrease font size"
        >
          A-
        </button>
      </div>
    </div>
  )
}

export default FontSizeController