import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert'
import Pagination from '../../common/Pagination/Pagination'

class Posts extends React.Component {

  componentDidMount() {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(1);
  }

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }

  loadPostsPage = (page) => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  }

  render() {
    const { posts, request, pages } = this.props;
    const { loadPostsPage } = this;

    console.log('sukces: ', request)
    if (request.pending === false && request.success === true && posts.length) {
      return (
        <div>
          <PostsList posts={posts} />
          <Pagination pages={pages} onPageChange={loadPostsPage}/>;
        </div>
      )
    }
    if (request.pending === true || request.success === null ) {
      return (
        <div>
          <Spinner />
        </div>
      )
    };
    if (request.pending === false && request.error !== null) {
      return (
        <div>
          <Alert variant='error' children={request.error}/>
        </div>
      )
    }
    if (request.pending === false && request.success === true && posts.length === 0) {
      return (
        <div>
          <Alert variant='info' children='-- no posts --'/>
        </div>
      )
    }
  }
}
Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;