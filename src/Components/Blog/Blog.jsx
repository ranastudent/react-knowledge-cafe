import PropTypes from 'prop-types';
import { GoBookmark } from "react-icons/go";

const Blog = ({blog,  handleAddToBookMark,  handleMarkAsRead}) => {
      const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
      return (
            <div className='mb-20 space-y-5'>
                  <img className='w-full h-72 object-cover mb-8' src={cover} alt={`Cover picture of title ${title}`} />
                  <div className='flex justify-between mb-4'>
                        <div className='flex'>
                              <img className='w-16 h-16 rounded-full ' src={author_img} alt="" />
                              <div className='ml-6'>
                                    <h2 className="text-2xl">{author}</h2>
                                    <p>{posted_date}</p>
                              </div>
                        </div>
                        <div className='gap-3'>
                              <span>{reading_time} min read</span>
                              <button onClick={()=> handleAddToBookMark(blog)} className='ml-4 text-2xl text-red-600'><GoBookmark /></button>
                        </div>
                  </div>
                  <h2 className="text-4xl">{title}</h2>
                  <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(reading_time)}
                className='text-purple-800 font-bold underline'
            >Mark As Read</button>
            </div>
      );
};
Blog.propTypes = {
      blog : PropTypes.object.isRequired,
      handleAddToBookMark: PropTypes.func,
      handleMarkAsRead: PropTypes.func
}
export default Blog;