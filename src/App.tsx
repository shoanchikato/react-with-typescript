import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

import NavBarCtn from './containers/NavBarCtn'
const User = lazy(() => import('./modules/user'))
const Post = lazy(() => import('./modules/post'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <NavBarCtn />
      <Switch>
        <Route component={Post} path='/posts'/>
        <Route component={User} path='/users'/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
