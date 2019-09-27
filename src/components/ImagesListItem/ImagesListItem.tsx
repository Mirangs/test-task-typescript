import React from 'react';

import './ImagesListItem.css';
import { ReactComponent as LikesIcon } from './img/icon-like.svg';
import { ReactComponent as CommentIcon } from './img/icon-comment.svg';

const ImagesListItem = ({
  imageUrl,
  likes = 0,
  comments = 0,
  tags = ''
}: {
  imageUrl: string,
  likes: number,
  comments: number,
  tags: string
}) => {
  return(
    <li className="ImagesListItem">
      <img src={imageUrl} alt={tags}/>
      <p className="ImagesListItem__information">
        <span className="Likes">
          <LikesIcon className="LikesIcon" />
          {likes}
        </span>
        <span className="Comments">
          <CommentIcon className="CommentIcon" />
          {comments}
        </span>
      </p>
    </li>
  );
};

export default ImagesListItem;