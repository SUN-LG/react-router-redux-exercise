import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
// import AmbiguousExample from './AmbiguousExample'
// import RouteConfigExample from './RouteConfigExample'
// import ModalGallery from './ModalGallery'
// import BlockRoute from './BlockRoute'
import logo from './logo.svg'
import './App.css'

const route = (props) => (
  <div>
    {console.log(props)}
    <h2>ru</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Link to="/route">to ru</Link>

        <Route path="/route" children={route} />
      </div>
      </BrowserRouter>
    )
  }
}

export default App
