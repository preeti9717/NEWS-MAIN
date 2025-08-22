const ArticleCounter = ({ count }) => {
  return (
    <div className="text-center mb-3">
      <span className="badge bg-secondary fs-6">
        📰 {count} articles loaded
      </span>
    </div>
  )
}

export default ArticleCounter