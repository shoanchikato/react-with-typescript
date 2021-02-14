

import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavBarLinkProps {
    linkName: string
    linkPath: string
    linkFunc?: () => void
}

interface NavBarProps {
    isAuthenticated: boolean
    onLogOut: () => void
}

const NavBarLink = ({ linkName, linkPath, linkFunc }: NavBarLinkProps) => (
    <li >
        <NavLink className="nav-link" to={linkPath} onClick={linkFunc} >{linkName}</NavLink>
    </li>
)

const NavBar = ({ isAuthenticated = true, onLogOut = () => { } }: NavBarProps) => {
    const links = [
        {
            linkName: 'Posts',
            linkPath: '/posts'
        },
        {
            linkName: 'Users',
            linkPath: '/users'
        }
    ]

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <ul>
                {isAuthenticated ? (
                    links.map(props => <NavBarLink key={props.linkName} {...props} />)
                ) : (
                        <NavBarLink linkName='Login' linkPath='/login' />
                    )}
            </ul>
        </nav>
    )
}

export default NavBar