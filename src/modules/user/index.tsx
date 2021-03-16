import { Route, Switch, useRouteMatch } from "react-router-dom"
import { ListUserCtn } from '../../containers/user/ListUserCtn'
import UserDetailsCtn from '../../containers/user/UserDetailsCtn'
import { UserProvider } from "../../state/user"

const User = () => {
    const { path } = useRouteMatch()

    return (
        <UserProvider>
            <Switch>
                <Route component={ListUserCtn} exact path={path} />
                <Route component={UserDetailsCtn} exact path={`${path}/:id`} />
            </Switch>
        </UserProvider>
    )
}

export default User
