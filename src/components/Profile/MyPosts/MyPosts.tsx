import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/Forms-control/FormsControl";
import {SuperButton} from "../../../common/SuperButton/SuperButton";
import {getArrayWithRandomNumber} from "../../../common/utils/getArrayWithRandomNumber";
import post from "./Post/Post";

const maxLengthCreator30 = maxLengthCreator(30);

export const MyPosts: React.FC<MyPostsPropsType> = ({addPost, posts, likePost, profilePhoto, ...restProps}) => {
    const onAddPost = (values: any) => {
        addPost(values.newPostText);
    }
    const onLikePost = (postID: number, likeCount: number) => {
        likePost(postID, likeCount)
    }

    const randomNumber = getArrayWithRandomNumber(posts)
    const filteredRandomPosts = posts.filter(p=>randomNumber.includes(p.id))
    const postElements = filteredRandomPosts.map((p, index) => (
        <Post key={index} id={p.id} post={p.post} avatar={profilePhoto} img={p.img} likeCount={p.likeCount}
              onLikePost={() => onLikePost(p.id, p.likeCount + 1)}/>))

    return (
        <div className={style.postsBlock}>
            <h3 className={style.myPostsHeader}>POSTS</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={style.postElements}>{postElements}</div>
        </div>
    )
}

const AddNewPostForm = (props: any) => {
    return (<form className={style.addPostForm} onSubmit={props.handleSubmit}>
            <div className={style.newPostContent}>
                <Field component={Textarea} name="newPostText" placeholder={"What's new?"}
                       validate={[required, maxLengthCreator30]} className={style.newPostField}/>
            </div>
            <div>
                <SuperButton>Add post</SuperButton>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostFormRedux"})(AddNewPostForm)