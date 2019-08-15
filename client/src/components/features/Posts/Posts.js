import React, {Component} from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import PostsList from '../PostsList/PostsList';
import Alert from '../../common/Alert/Alert'
import Pagination from "../../common/Pagination/Pagination";

class Posts extends Component {
	componentDidMount() {
		const { loadPostByPage, postsPerPage, initialPage } = this.props;
		loadPostByPage(initialPage || 1, postsPerPage);
  };

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }
	loadPostsPage = (page) => {
		const { loadPostByPage, postsPerPage } = this.props;
		loadPostByPage(page, postsPerPage);
	};

	render () {
		let { posts, request, pages, pagination, presentPage} = this.props;
		if (pagination === undefined) {
			pagination = true;
		}

		if (request.pending === false && request.success === true && posts.length) {
			return (
				<div>
					<PostsList posts={posts} />
					{pagination && <Pagination pages={pages} initialPage={presentPage} onPageChange={this.loadPostsPage}/> }
				</div>
			);
		}

		if (request.pending === true || request.success === null) {
			return (
				<div>
					<Spinner />
				</div>
			)
		}

		if (!request.pending && request.error !== null) {
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
			author:  PropTypes.string.isRequired,
		})
	),
	loadPostByPage: PropTypes.func.isRequired,
};

export default Posts;

// import React from 'react';
// import { PropTypes } from 'prop-types';

// import PostsList from '../PostsList/PostsList';
// import Spinner from '../../common/Spinner/Spinner';
// import Alert from '../../common/Alert/Alert'
// import Pagination from '../../common/Pagination/Pagination'

// class Posts extends React.Component {

//   componentDidMount() {
//     const { loadPostsByPage } = this.props;
//     loadPostsByPage(1);
//   }



//   loadPostsPage = (page) => {
//     const { loadPostsByPage } = this.props;
//     loadPostsByPage(page);

//   }

//   render() {
//     const { posts, request, pages } = this.props;
//     const { loadPostsPage } = this;
//     console.log('sukces: ', request)
//     if (request.pending === false && request.success === true && posts.length) {
//       return (
//         <div>
//           <PostsList posts={posts} />
//           <Pagination pages={pages} onPageChange={loadPostsPage}/>
//         </div>
//       )
//     }
//     if (request.pending === true || request.success === null ) {
//       return (
//         <div>
//           <Spinner />
//         </div>
//       )
//     };
//     if (request.pending === false && request.error !== null) {
//       return (
//         <div>
//           <Alert variant='error' children={request.error}/>
//         </div>
//       )
//     }
//     if (request.pending === false && request.success === true && posts.length === 0) {
//       return (
//         <div>
//           <Alert variant='info' children='-- no posts --'/>
//         </div>
//       )
//     }
//   }
// }
// Posts.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//     })
//   ),
//   loadPostsByPage: PropTypes.func.isRequired,
// };

// export default Posts;