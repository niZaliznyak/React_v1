import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/999/EP0177-CUSA07010_00-AV00000000000004/1593099665000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"></img>
          {props.message}
      <div>
        <span>Like : {props.like} </span>
        <span>Dislike : 0</span>
      </div>
    </div>
  )
}

export default Post;