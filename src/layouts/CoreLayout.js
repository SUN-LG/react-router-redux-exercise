import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store/createStore'
import Header from '../components/Header'
import {Home, AsyncCounter, AsyncElapse} from '../routes'
import '../assets/style/core.css'

// const store = createStore()

const CoreLayout = () => (
  <div>
    <Header />

    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/counter" component={AsyncCounter}></Route>
      <Route exact path="/elapse" component={AsyncElapse}></Route>
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
