import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;


    return (
        <div className='bg-white m-4 p-6 rounded-lg '>
            <h1 className='text-xl font-semibold'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;