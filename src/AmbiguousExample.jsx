import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

const AmbiguousExample = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/about">About Us (static)</Link></li>
        <li><Link to="/company">Company (static)</Link></li>
        <li><Link to="/kim">Kim (dynamic)</Link></li>
        <li><Link to="/chris">Chris (dynamic)</Link></li>
      </ul>
      <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/company" component={Company}></Route>
        <Route path="/:user" component={User}></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

const About = () => <h2>About</h2>
const Company = () => <h2>Company</h2>
const User = ({match}) => (
  <div>
    <h2>User: {match.params.user}</h2>
  </div>
)

export default AmbiguousExample
