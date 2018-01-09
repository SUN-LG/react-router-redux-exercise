import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store/createStore'
import Header from '../components/Header'
import {Home, Counter} from '../routes'
import '../assets/style/core.css'

// const store = createStore()

const CoreLayout = () => (
  <div>
    <Header />

    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/counter" component={Counter}></Route>
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
