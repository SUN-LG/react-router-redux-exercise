import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store/createStore'
import Header from '../components/Header'
import {Home, Counter, Elapse} from '../routes'
import '../assets/style/core.css'

// const store = createStore()

const CoreLayout = () => (
  <div>
    <Header />

    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/counter" component={Counter}></Route>
      <Route path="/elapse" component={Elapse}></Route>
    </Switch>
  </div>
)

const App = () => (
  <Provider store={store}>
    <Router>
      <Route component={CoreLayout}></Route>
    </Router>
  </Provider>
)

export default App
