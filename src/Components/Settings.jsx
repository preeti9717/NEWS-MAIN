import { useState } from 'react'

const Settings = ({ onBack, darkMode, toggleTheme, onRefresh }) => {
  const [autoRefresh, setAutoRefresh] = useState(false)

  const shareApp = () => {
    if (navigator.share) {
      navigator.share({
        title: 'NewsMain - Latest News App',
        text: 'Check out this awesome news app!',
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('App link copied to clipboard!')
    }
  }

  const clearCache = () => {
    if (window.confirm('Clear all cached data? This will remove bookmarks and preferences.')) {
      localStorage.clear()
      window.location.reload()
    }
  }

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <button className="btn btn-outline-secondary me-3" onClick={onBack}>
          ← Back
        </button>
        <h2>⚙️ Settings</h2>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card bg-secondary text-light mb-3">
            <div className="card-body">
              <h5 className="card-title">🎨 Appearance</h5>
              <div className="d-flex justify-content-between align-items-center">
                <span>Theme</span>
                <button className="btn btn-outline-light btn-sm" onClick={toggleTheme}>
                  {darkMode ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-secondary text-light mb-3">
            <div className="card-body">
              <h5 className="card-title">🔄 Refresh</h5>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span>Manual Refresh</span>
                <button className="btn btn-outline-light btn-sm" onClick={onRefresh}>
                  🔄 Refresh Now
                </button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>Auto Refresh (5min)</span>
                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={autoRefresh}
                    onChange={(e) => setAutoRefresh(e.target.checked)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card bg-secondary text-light mb-3">
            <div className="card-body">
              <h5 className="card-title">📤 Share</h5>
              <div className="d-flex justify-content-between align-items-center">
                <span>Share NewsMain</span>
                <button className="btn btn-outline-light btn-sm" onClick={shareApp}>
                  📤 Share App
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-secondary text-light mb-3">
            <div className="card-body">
              <h5 className="card-title">🗑️ Data</h5>
              <div className="d-flex justify-content-between align-items-center">
                <span>Clear Cache</span>
                <button className="btn btn-outline-danger btn-sm" onClick={clearCache}>
                  🗑️ Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-secondary text-light">
        <div className="card-body">
          <h5 className="card-title">ℹ️ About</h5>
          <p className="card-text">NewsMain v1.0 - Your daily news companion</p>
          <small className="text-muted">Built with React & News API</small>
        </div>
      </div>
    </div>
  )
}

export default Settings