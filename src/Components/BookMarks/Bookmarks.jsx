
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
      return (
            <div className="md:w-1/3 bg-gray-300  mt-2 ml-4 pt-4 mx-auto">
                  <div>
                        <h2 className="text-4xl text-center ">Reading Time: {readingTime}</h2>
                  </div>
                  <h2 className="text-3xl text-center ">Bookmark Blog: {bookmarks.length}</h2>
                  {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}  ></Bookmark>)
                  }
            </div>
      )
}

Bookmarks.propTypes = {
            bookmarks: PropTypes.array,
            readingTime: PropTypes.func
}

export default Bookmarks
