import React from 'react';
import PropTypes from 'prop-types';

function Post({ post, removePost, likePost }) {
  const {id,title,like} = post

  return (
    <div className="Post">
      <button className="Post__delete" onClick={() => removePost(id)}>
        X
      </button>
      <div className="Post__title">{title}</div>
      <img
        className="Post__image"
        src={`https://source.unsplash.com/random?sig=${id}`}
        alt={`Post ${id}`}
      />
      <button className='Post__emotion' onClick={() => likePost(id)}>
      {like ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    like: PropTypes.bool.isRequired,
  }).isRequired,
  removePost: PropTypes.func.isRequired,
  likePost: PropTypes.func.isRequired
};

export default Post;
