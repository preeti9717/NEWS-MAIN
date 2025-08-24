import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"
import ArticleCounter from "./ArticleCounter"

const NewsBoard = ({category, searchQuery}) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        
        // Use Netlify function in production, direct API in development
        const isProduction = window.location.hostname !== 'localhost'
        let url
        
        if (isProduction) {
            // Use Netlify function
            const params = new URLSearchParams()
            if (searchQuery) {
                params.append('searchQuery', searchQuery)
            } else {
                params.append('category', category)
            }
            url = `/.netlify/functions/news?${params}`
        } else {
            // Use direct API for localhost
            url = searchQuery 
                ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${import.meta.env.VITE_API_KEY}`
                : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        }
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles || [])
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching news:', error)
                setArticles([])
                setLoading(false)
            })
    }, [category, searchQuery])

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {loading ? (
                <div className="text-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <ArticleCounter count={articles.length} />
                    {articles.map((news, index) => {
                        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                    })}
                </>
            )}
        </div>
    )
}

export default NewsBoard