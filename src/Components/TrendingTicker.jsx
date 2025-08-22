import { useState, useEffect } from 'react'

const TrendingTicker = ({ onTrendClick }) => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    // Mock trending topics
    const mockTrends = [
      'AI Technology', 'Climate Change', 'Cryptocurrency', 'Space Exploration', 
      'Healthcare', 'Economy', 'Sports News', 'Tech Innovation'
    ]
    setTrends(mockTrends)
  }, [])

  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="d-flex align-items-center">
        <span className="badge bg-danger me-3 px-3">🔥 TRENDING</span>
        <div className="d-flex animate-scroll">
          {trends.map((trend, index) => (
            <span 
              key={index} 
              className="me-4 text-nowrap cursor-pointer text-decoration-underline"
              onClick={() => onTrendClick && onTrendClick(trend)}
              style={{ cursor: 'pointer' }}
            >
              #{trend}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}

export default TrendingTicker