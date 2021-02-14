import { useContext } from "react"
import { PostContext } from "."
import { PostAction, Post } from "./model"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const useFetchPosts:() => () => void = () => {
    const { dispatch } = useContext(PostContext)

    return async () => {
        dispatch({ type: PostAction.REQUEST })
        try {
            const response: Response = await fetch(`${BASE_URL}/posts`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data: Post[] = await response.json()
            dispatch({ type: PostAction.SUCCESS, payload: data })

        } catch (e) {
            dispatch({type: PostAction.ERROR, payload: e })
        }
    }
}