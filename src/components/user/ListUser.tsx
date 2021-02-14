import { Fragment } from "react"
import { User, UserState } from "../../state/user/model"

interface ListUserProps {
    readonly state: UserState
    readonly selectUser: (user: User) => void
}

export const ListUser
    = ({ selectUser, state: { users, isLoading } }: ListUserProps) => (
        <div>
            {isLoading ?
                <h1>Loading..</h1>
                :
                users.map((user: User) => (
                    <Fragment key={user.id}>
                        <h3 style={{ cursor: "pointer" }} onClick={() => selectUser(user)}>{user.name}</h3>
                        <p>{user.username}</p>user.
                        <p>{user.email}</p>
                        <p>{user.website}</p>
                    </Fragment>
                ))
            }
        </div>
    )