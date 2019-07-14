import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  componentDidMount() {
    const { getPostsNumber } = this.props;
    getPostsNumber();
  }

  render() {
    const { number } = this.props;

    return (
      <div>
        {number}
      </div>
    );
  }

};

PostsCounter.propTypes = {
  number: PropTypes.number,
  loadPosts: PropTypes.func.isRequired,
};

export default PostsCounter;
