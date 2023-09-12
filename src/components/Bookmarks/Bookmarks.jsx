import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (

        <div className='md:w-4/12'>
            <div className='bg-slate-300 p-4 rounded-xl'>
                <h3 className="text-2xl font-bold text-purple-700">Spent time on read  : {readingTime} min</h3>
            </div>
            <div className="bg-slate-300 mt-8 pb-8 rounded-xl">
                <h1 className="text-2xl font-bold text-center pt-4">Bookmarked Blogs : {bookmarks.length}</h1>

                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;