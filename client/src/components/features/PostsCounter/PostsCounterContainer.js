import { connect } from 'react-redux';
import { getPostsNumber, loadPostsRequest } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
  postsNumber: getPostsNumber(state.length),
})

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsCounter);