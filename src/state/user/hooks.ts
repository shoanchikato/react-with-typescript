import { useContext } from "react"
import { UserContext } from "."
import { UserAction, User } from "./model"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const useFetchUsers: () => () => void = () => {
    const { dispatch } = useContext(UserContext)

    return async () => {
        dispatch({ type: UserAction.REQUEST })
        try {
            const response: Response = await fetch(`${BASE_URL}/users`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data: User[] = await response.json()
            dispatch({ type: UserAction.SUCCESS, payload: data })

        } catch (e) {
            dispatch({ type: UserAction.ERROR, payload: e })
        }
    }
}