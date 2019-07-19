import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  // componentDidMount() {
  //   const { loadPosts } = this.props;
  //   loadPosts();
  // }

  render() {
    const { posts } = this.props;
    if (this.props.posts.length) {
      return (
        <div>
          Posts amount: {posts.length}
        </div>
      )
    }
    else {
      return (
        <div>
          - no posts -
        </div>)
    }
  }
};

PostsCounter.propTypes = {
  posts: PropTypes.array,
  loadPosts: PropTypes.func.isRequired,
};

export default PostsCounter;
