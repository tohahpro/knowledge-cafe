import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author, author_img,
        reading_time, posted_date, hashtags
    } = blog

    return (
        <div className='mb-20 mr-8 space-y-4'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-14 mb-4' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-xl font-medium">{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>

                    {/* bookmark button  */}
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-400'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className="font-semibold text-2xl">{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='mr-6 font-semibold text-gray-400' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)}
                className='text-blue-500 font-semibold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}


export default Blog;