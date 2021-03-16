import React, { Dispatch, ReactElement, ReactNode, useReducer } from "react"
import { PostActions, PostAction, PostState } from "./model"

const initialState: PostState = {
    isLoading: false,
    hasError: false,
    errorMessage: '',
    selectedPost: undefined,
    posts: [],
}

const initialDispatch = () => {}

const reducer = (state: PostState, action: PostActions) => {
    switch (action.type) {
        case PostAction.REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMessage: "",
                hasError: false,
            }
        case PostAction.SUCCESS:
            return {
                ...state,
                isLoading: false,
                selectedPost: undefined,
                posts: action.payload,
                errorMessage: "",
                hasError: false,
            }
        case PostAction.ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                hasError: true,
                posts: [],
                isLoading: false,
            }
        case PostAction.SELECT:
            return {
                ...state,
                selectedPost: action.payload,
            }
        default:
            return state
    }
}

type PostContextProps = { state: PostState, dispatch: Dispatch<PostActions> }

type PostProviderType = (props: { children?: ReactNode; }, context?: any) => ReactElement<any, any> | null

const PostContext = React.createContext<PostContextProps>({state: initialState, dispatch: initialDispatch})

const PostProvider: PostProviderType = (props: { children?: ReactNode }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <PostContext.Provider value={{ state, dispatch }}>
            {props.children}
        </PostContext.Provider>
    )
}

export { PostContext, PostProvider }
