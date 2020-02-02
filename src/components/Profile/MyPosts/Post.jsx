import React from 'react'

const Post = (props) => {
    return (
    <div>
        <div>{props.message}</div>
        <div>Likes: {props.likesCount}</div>
    </div>
    )
}

export default Post