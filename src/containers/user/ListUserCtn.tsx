import { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { ListUser } from "../../components/user/ListUser"
import { UserContext } from "../../state/user"
import { useFetchUsers } from "../../state/user/hooks"
import { User, UserAction } from "../../state/user/model"

export const ListUserCtn = () => {
    const { state, dispatch } = useContext(UserContext)
    const fetchUsers = useFetchUsers()
    const history = useHistory()

    useEffect(fetchUsers, [])
    const selectUser = (user: User) => {
        dispatch({ type: UserAction.SELECT, payload: user })
        history.push(`users/${user.id}`)
    }

    return (
        <ListUser state={state} selectUser={selectUser} />
    )
}