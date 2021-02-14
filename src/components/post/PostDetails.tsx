import { Fragment } from "react"
import { Post } from "../../state/post/model"

interface PostDetailsProps {
    selectedPost: Post
}

const PostDetails = ({ selectedPost: { title, body } }: PostDetailsProps) => {
    return (
        <Fragment>
            <h2>{title}</h2>
            <p>{body}</p>
        </Fragment>
    )
}

export default PostDetails