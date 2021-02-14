import { Fragment } from "react"
import { User } from "../../state/user/model"

interface UserDetailsProps {
    selectedUser: User
}

const UserDetails = (
    { selectedUser: { name, username, email, website, company } }: UserDetailsProps
) => {
    return (
        <Fragment>
            <h2>{name}</h2>
            <p><b>Username:</b> {username}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Website:</b> {website}</p>
            <p><b>Company:</b> {company.name}</p>
        </Fragment>
    )
}

export default UserDetails