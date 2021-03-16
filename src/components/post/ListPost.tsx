import { Fragment } from "react"
import { Post, PostState } from "../../state/post/model"

interface ListPostProps {
    readonly state: PostState
    readonly selectPost: (post: Post) => void
}

export const ListPost
    = ({ selectPost, state: { posts, isLoading } }: ListPostProps) => (
        <div>
            {isLoading ?
                <h1>Loading</h1>
                :
                posts.map((post: Post) => (
                    <Fragment key={post.id}>
                        <h3 style={{cursor: "pointer"}} onClick={() => selectPost(post)}>{post.title}</h3>
                        <p>{post.body}</p>
                    </Fragment>
                ))
            }
        </div>
    )