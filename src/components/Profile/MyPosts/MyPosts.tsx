import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/Forms-control/FormsControl";


const maxLengthCreator30 = maxLengthCreator(30);
const MyPosts = (props: MyPostsPropsType) => {
    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    }
    let postElements = props.posts.map((p, index) => (
        <Post key={index} id={p.id} post={p.post} likeCount={p.likeCount}/>))

    return (
        <div>
            <h3 className={classes.myPostsHeader}>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {postElements}
        </div>
    )
}
const AddNewPostForm = (props: any) => {
    return (<form className={classes.textArea_Button} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" placeholder={"What's new?"} validate={[required, maxLengthCreator30]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostFormRedux"})(AddNewPostForm)
export default MyPosts;