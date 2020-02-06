import React from 'react'
import style from './MyPosts.module.css';

const Post = (props) => {
    return (
    <div className={style.postItem}>
        <div>{props.message}</div>
        <div>Likes: {props.likesCount}</div>
    </div>
    )
}

export default Post