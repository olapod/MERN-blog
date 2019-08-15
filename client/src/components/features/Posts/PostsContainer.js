import { connect } from 'react-redux';
import { getPosts, getRequest, getPages, loadPostsByPageRequest, getPresentPage, resetRequest} from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
	posts: getPosts(state),
	request: getRequest(state),
	pages: getPages(state),
	presentPage: getPresentPage(state)
})

const mapDispatchToProps = dispatch => ({
  loadPostByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage)),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
// import { connect } from 'react-redux';
// import { getPosts, getRequest, loadPostsByPageRequest, getPages, resetRequest } from '../../../redux/postsRedux';
// import Posts from './Posts';

// const mapStateToProps = state => ({
//   posts: getPosts(state),
//   request: getRequest(state),
//   pages: getPages(state),
// });

// const mapDispatchToProps = dispatch => ({
//   loadPostsByPage: (page) => dispatch(loadPostsByPageRequest(page)),
//   resetRequest: () => dispatch(resetRequest())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Posts);