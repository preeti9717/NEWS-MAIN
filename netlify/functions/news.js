exports.handler = async (event, context) => {
  const { category, searchQuery } = event.queryStringParameters || {}
  
  const API_KEY = process.env.VITE_API_KEY
  
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured' })
    }
  }

  try {
    let url
    if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category || 'general'}&apiKey=${API_KEY}`
    }

    const response = await fetch(url)
    const data = await response.json()

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch news' })
    }
  }
}