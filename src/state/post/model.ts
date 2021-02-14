export class Post {
    constructor(
        public userId: number,
        public id: number,
        public body: string,
        public title: string,
    ) {
        this.userId = userId
        this.id = id
        this.body = body
        this.title = title
    }
}

export interface PostState {
    isLoading: boolean
    hasError: boolean
    errorMessage: string
    selectedPost?: Post
    posts: Post[]
}

export enum PostAction {
    REQUEST = "request",
    SUCCESS = "success",
    ERROR = "error",
    SELECT = "select",
}

export type PostActions =
    | { type: PostAction.REQUEST }
    | { type: PostAction.SUCCESS, payload: Post[] }
    | { type: PostAction.ERROR, payload: string }
    | { type: PostAction.SELECT, payload: Post }
