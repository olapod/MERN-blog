import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  // componentDidMount() {
  //   const { loadPosts } = this.props;
  //   loadPosts();
  // }

  render() {
    const { postsNumber } = this.props;
    console.log("Liczba postów:" + postsNumber)
    return (
      <div>
        Post amount: { postsNumber }
      </div>
    );
  }

};

PostsCounter.propTypes = {
  number: PropTypes.number,
  loadPosts: PropTypes.func.isRequired,
};

export default PostsCounter;
