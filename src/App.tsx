import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'
import NavBarCtn from './containers/NavBarCtn'
import { ListPostCtn } from './containers/post/ListPostCtn'
import PostDetailsCtn from './containers/post/PostDetailsCtn'
import { ListUserCtn } from './containers/user/ListUserCtn'
import UserDetailsCtn from './containers/user/UserDetailsCtn'

function App() {
  return (
    <Router>
      <NavBarCtn />
      <Switch>
        <Route component={ListPostCtn} exact path='/posts'/>
        <Route component={PostDetailsCtn} exact path='/posts/:id'/>
        <Route component={ListUserCtn} exact path='/users'/>
        <Route component={UserDetailsCtn} exact path='/users/:id'/>
      </Switch>
    </Router>
  )
}

export default App
