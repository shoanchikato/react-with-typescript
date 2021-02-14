import { useContext } from "react"
import { Redirect, useHistory } from "react-router"
import PostDetails from "../../components/post/PostDetails"
import { PostContext } from "../../state/post"

const PostDetailsCtn = () => {
    const { state: { selectedPost } } = useContext(PostContext)
    const history = useHistory()
    typeof selectedPost === "undefined" && history.push("post")

    return (
        selectedPost === undefined
            ? <Redirect to="/posts" />
            : <PostDetails selectedPost={selectedPost!} />
    )
}

export default PostDetailsCtn