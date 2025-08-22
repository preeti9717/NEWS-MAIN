import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import BackToTop from './Components/BackToTop';
import ReadingProgress from './Components/ReadingProgress';
import DarkModeToggle from './Components/DarkModeToggle';
import TrendingTicker from './Components/TrendingTicker';
import { useState } from 'react';

const App = () => {
  const [category, setCategory] = useState("general")
  const [searchQuery, setSearchQuery] = useState("")
  
  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
    setSearchQuery("")
  }
  
  const handleTrendClick = (trend) => {
    setSearchQuery(trend)
  }
  
  return (
    <div>
      <ReadingProgress />
      <Navbar setCategory={handleCategoryChange} onSearch={handleSearch} />
      <TrendingTicker onTrendClick={handleTrendClick} />
      <NewsBoard category={category} searchQuery={searchQuery} />
      <BackToTop />
      <DarkModeToggle />
    </div>
  )
}

export default App