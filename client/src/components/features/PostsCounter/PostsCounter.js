import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  // componentDidMount() {
  //   const { loadPosts } = this.props;
  //   loadPosts();
  // }

  render() {
    const { posts } = this.props;

    return (
      <div>
        Post amount: { posts.length }
      </div>
    );
  }

};

PostsCounter.propTypes = {
  number: PropTypes.number,
  // loadPosts: PropTypes.func.isRequired,
};

export default PostsCounter;
