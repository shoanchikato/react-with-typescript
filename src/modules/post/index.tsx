import { Route, Switch, useRouteMatch } from "react-router-dom"
import { ListPostCtn } from '../../containers/post/ListPostCtn'
import PostDetailsCtn from '../../containers/post/PostDetailsCtn'
import { PostProvider } from "../../state/post"

const Post = () => {
    const { path } = useRouteMatch()

    return (
        <PostProvider>
            <Switch>
                <Route component={ListPostCtn} exact path={path} />
                <Route component={PostDetailsCtn} exact path={`${path}/:id`} />
            </Switch>
        </PostProvider>
    )
}

export default Post
