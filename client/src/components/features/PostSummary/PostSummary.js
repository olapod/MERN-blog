import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import cutText from './PostSummaryContainer'

import './PostSummary.scss';

const PostSummary = ({ id, title, content, props}) => {
  console.log("-------------------", props)
  return (
      <article className="post-summary">
        <span>{props.id}</span>
      <SmallTitle>{title}</SmallTitle>
      <HtmlBox>{cutText(content, 250)}</HtmlBox>
      <Link
        to={`/posts/${props}`}
        key={`post-${props}`}
        id={`post-${props}`}
        {...props}
      >
        <Button variant="primary">
          Read more
        </Button>
      </Link>
    </article>
  )
};

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default PostSummary;