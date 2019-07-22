import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadSinglePostRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  singlePost: getSinglePost(state),
  request: getRequest(state),
  });

const mapDispatchToProps = dispatch => ({
  loadSinglePost: () => dispatch(loadSinglePostRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);