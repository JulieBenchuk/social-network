import React, {useMemo, useState} from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/Forms-control/FormsControl";
import {SuperButton} from "../../../common/SuperButton/SuperButton";
import {getArrayWithRandomNumber} from "../../../common/utils/getArrayWithRandomNumber";
import {PostType} from "../../../redux/profile-reducer";

const maxLengthCreator30 = maxLengthCreator(30);

const MyPosts: React.FC<MyPostsPropsType> = ({addPost, posts, likePost, profilePhoto}) => {

    /// simulate adding a new post to the state (current posts are received from state randomly)
    const [newPostArray, setNewPostArray] = useState<Array<PostType>>([])

    const onAddPost = (values: any) => {
        addPost(values.newPostText)
        newPostArray.unshift({id: Math.ceil(Math.random()*10000), post: values.newPostText, likeCount: 0})
        setNewPostArray(newPostArray)
    }
    const onLikePost = (postID: number, likeCount: number) => {
        likePost(postID, likeCount)
        newPostArray.map(p=>p.id===postID ? p.likeCount++ : p)
    }

    const randomNumber = useMemo(() => {
        return getArrayWithRandomNumber(posts, 3)
    }, [])


    const filteredRandomPosts = useMemo(() => {
        return newPostArray.concat(posts.filter(p => randomNumber.includes(p.id)))
    }, [posts, newPostArray])


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
export default React.memo(MyPosts)

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