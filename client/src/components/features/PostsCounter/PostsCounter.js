import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  // componentDidMount() {
  //   const { loadPosts } = this.props;
  //   loadPosts();
  // }

  render() {
    const { postsNumber } = this.props;
    console.log("++++" + postsNumber)
    return (
      <div>
        Post amount: { postsNumber }
      </div>
    );
  }

};

PostsCounter.propTypes = {
  postNumber: PropTypes.number,
  // loadPosts: PropTypes.func.isRequired,
};

export default PostsCounter;
