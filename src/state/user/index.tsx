import React, { Dispatch, useReducer } from "react"
import { UserActions, UserAction, UserState } from "./model"

const initialState: UserState = {
    isLoading: false,
    hasError: false,
    errorMessage: '',
    selectedUser: undefined,
    users: [],
}

const initialDispatch = () => { }

const reducer = (state: UserState, action: UserActions) => {
    switch (action.type) {
        case UserAction.REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMessage: "",
                hasError: false,
            }
        case UserAction.SUCCESS:
            return {
                ...state,
                isLoading: false,
                selectedUser: undefined,
                users: action.payload,
                errorMessage: "",
                hasError: false,
            }
        case UserAction.ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                hasError: true,
                users: [],
                isLoading: false,
            }
        case UserAction.SELECT:
            return {
                ...state,
                selectedUser: action.payload
            }
        default:
            return state
    }
}

type UserContextProps = { state: UserState, dispatch: Dispatch<UserActions> }

type UserProviderType = (props: { children: React.ComponentType }) => React.ReactElement

const UserContext = React.createContext<UserContextProps>({ state: initialState, dispatch: initialDispatch })

const UserProvider: UserProviderType = (props: { children: React.ComponentType }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            { props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
