import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post'
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls';
import cn from 'classnames'

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={style.textPost} name='newPostText' component={Textarea} placeholder={'Post message'}
                    validate={[required, maxLength10]} />
            </div>
                <button className={cn('btn', style.addPostBtn)}>Add post</button>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

const MyPosts = React.memo((props) => {
    let postsElements = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={style.myPost}>
            <div className={style.addPost}>
                <h3 className={style.title}>My Posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost} />
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
})

export default MyPosts;