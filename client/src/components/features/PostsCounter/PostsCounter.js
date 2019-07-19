import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

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
};

export default PostsCounter;
