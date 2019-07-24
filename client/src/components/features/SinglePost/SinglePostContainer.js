import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadSinglePostRequest, resetRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

resetRequest();

const mapStateToProps = (state) => ({
	singlePost: getSinglePost(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadSinglePost: (id) => dispatch(loadSinglePostRequest(id)),
  resetRequest: () => dispatch({ type: 'RESET_REQUEST' })
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);