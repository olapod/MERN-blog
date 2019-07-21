import React from 'react';
// import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

// import './PostSummary.scss';

class SinglePost extends React.Component {

  componentDidMount() {
    const { loadSinglePost } = this.props;
    loadSinglePost();
  }

  render() {
    const { singlePost, request } = this.props;
    console.log(singlePost)
    if (request.pending === false && request.success === true && singlePost) {
      return (
        <div>
          <article className="post-summary">
            <SmallTitle>{singlePost.title}</SmallTitle>
            <HtmlBox>{singlePost.content}</HtmlBox>
          </article>
        </div>
      )
    }
    if (request.pending === true || request.success === null) {
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
    if (request.pending === false && request.success === true && !singlePost) {
      return (
        <div>
          <Alert variant='info' children='-- no post --'/>
        </div>
      )
    }
  }
}
// Posts.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//     })
//   ),
//   loadSinglePosts: PropTypes.func.isRequired,
// };

export default SinglePost;