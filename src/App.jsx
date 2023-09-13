import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import { useState } from "react"

function App() {


  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  // step- 2.5 
  const [remaining, setRemaining] = useState(0)



  const handleAddToBookmark = blog => {

    const isExist = bookmarks.find(item => item.id == blog.id)

    if (isExist) {
      return alert(' You\'ve already booked this blog')
    } else {
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks)
    }

    // const newBookmarks = [...bookmarks, blog];
    // setBookmarks(newBookmarks);
  }

  // for timing 
  const handleMarkAsRead = (id, time) => {
    // step-1: total reading time ber kora 
    let totalRedingTime = readingTime + time;
    // step-2: obosistho time ber korte hobe . step- 2.5: akta useState banate hobe
    let remainingTime = 30 - totalRedingTime
    if (remainingTime < 0) {
      return alert('time nai')
    } else {
      setReadingTime(readingTime + time)
      setRemaining(remainingTime)
      const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookmarks(remainingBookmarks)
    }


    // setReadingTime(readingTime + time)

    // remove the read blog from the bookmark 

    // const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    // setBookmarks(remainingBookmarks)
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
