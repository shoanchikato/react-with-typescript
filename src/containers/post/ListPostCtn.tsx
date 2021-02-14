import { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { ListPost } from "../../components/post/ListPost"
import { PostContext } from "../../state/post"
import { useFetchPosts } from "../../state/post/hooks"
import { Post, PostAction } from "../../state/post/model"

export const ListPostCtn = () => {
    const { state, dispatch } = useContext(PostContext)
    const fetchPosts = useFetchPosts()
    const history = useHistory()

    useEffect(fetchPosts, [])
    
    const selectPost = (post: Post) => {
        dispatch({ type: PostAction.SELECT, payload: post })
        history.push(`posts/${post.id}`)
    }

    return (
        <ListPost state={state} selectPost={selectPost} />
    )
}