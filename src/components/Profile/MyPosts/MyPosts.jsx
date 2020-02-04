import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post'
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} placeholder={'Post message'}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
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
        <div>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
})

export default MyPosts;