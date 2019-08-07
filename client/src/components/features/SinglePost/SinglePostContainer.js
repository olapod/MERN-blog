import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadSinglePostRequest, resetRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = (state) => ({
	singlePost: getSinglePost(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch, {id}) => ({
  loadSinglePost: () => dispatch(loadSinglePostRequest(id)),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);