import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import { useState } from "react"

function App() {


  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  // for timing 
  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex py-4 max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>


    </>
  )
}

export default App
