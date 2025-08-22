
import { useState, useEffect } from 'react';
import image from '../assets/news default image.avif';

const NewsItem = ({title, description, src, url}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setIsBookmarked(bookmarks.some(bookmark => bookmark.url === url));
  }, [url]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (isBookmarked) {
      const filtered = bookmarks.filter(bookmark => bookmark.url !== url);
      localStorage.setItem('bookmarks', JSON.stringify(filtered));
    } else {
      bookmarks.push({title, description, src, url});
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
      <img src={src || image} style={{height: "200px", width: "325px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title">{title?.slice(0,50)}</h5>
          <button className="btn btn-sm btn-outline-light" onClick={toggleBookmark}>
            {isBookmarked ? '❤️' : '🤍'}
          </button>
        </div>
        <p className="card-text">{description?.slice(0,90) || "Stay updated with the latest news from around the world. Click 'Read More' to get the full story!"}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem
