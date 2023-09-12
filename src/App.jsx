import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
function App() {


  return (
    <>
      <Header></Header>
      <div className="md:flex p-4 mx-6">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>


    </>
  )
}

export default App
