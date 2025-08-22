import { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const Bookmarks = ({ onBack }) => {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setBookmarks(savedBookmarks)
  }, [])

  const clearAllBookmarks = () => {
    if (window.confirm('Are you sure you want to clear all bookmarks?')) {
      localStorage.removeItem('bookmarks')
      setBookmarks([])
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>
          <button className="btn btn-outline-secondary me-3" onClick={onBack}>
            ← Back
          </button>
          Your <span className="badge bg-danger">Bookmarks</span>
        </h2>
        {bookmarks.length > 0 && (
          <button className="btn btn-outline-danger" onClick={clearAllBookmarks}>
            Clear All
          </button>
        )}
      </div>

      {bookmarks.length === 0 ? (
        <div className="text-center mt-5">
          <h4>No bookmarks yet</h4>
          <p>Start bookmarking articles by clicking the heart icon!</p>
        </div>
      ) : (
        <div>
          <p className="text-muted mb-4">{bookmarks.length} saved articles</p>
          {bookmarks.map((bookmark, index) => (
            <NewsItem
              key={index}
              title={bookmark.title}
              description={bookmark.description}
              src={bookmark.src}
              url={bookmark.url}
              publishedAt={bookmark.publishedAt}
              source={bookmark.source}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Bookmarks