import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import SinglePostContainer from '../../features/SinglePost/SinglePostContainer';

const SinglePostPage = (props) => (
  <div>
    <PageTitle>Single Post Overview</PageTitle>
    <SinglePostContainer id={props.match.params.id} />
  </div>
);

export default SinglePostPage;