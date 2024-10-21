import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookMark = blog=>{
        const newBookmarks = [...bookmarks, blog]
        setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time, id) =>{
    
    setReadingTime( readingTime + time);
    // remove the read blog from bookmark
    const remainingBooksMark = bookmarks.filter(bookmarks => bookmarks.id !==id);
    setBookmarks(remainingBooksMark)
  }

  return (
    <>
      <Header></Header> 
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs  handleAddToBookMark={ handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
