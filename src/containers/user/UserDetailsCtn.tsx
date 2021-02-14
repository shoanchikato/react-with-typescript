import { useContext, useEffect } from "react"
import { Redirect, useHistory } from "react-router"
import UserDetails from "../../components/user/UserDetails"
import { UserContext } from "../../state/user"

const UserDetailsCtn = () => {
    const { state: { selectedUser } } = useContext(UserContext)
    const history = useHistory()
    // check if selectedUser is defined
    useEffect(() => { selectedUser === undefined && history.push("/users") }, [selectedUser])


    return (
        selectedUser === undefined
            ? <Redirect to="users" />
            : <UserDetails selectedUser={selectedUser!} />
    )
}

export default UserDetailsCtn