import React from 'react'
/* eslint-disable */
// import createBrowserHistory from 'history/createBrowserHistory';
import {Route, Link, BrowserRouter, Prompt} from 'react-router-dom'

// const BrowserHistory = createBrowserHistory({
//   basename: '',             // The base URL of the app (see below)
//   forceRefresh: false,      // Set true to force full page refreshes
//   keyLength: 6,             // The length of location.key
//   // A function to use to confirm navigation with the user (see below)
//   getUserConfirmation: (message, callback) => callback(window.confirm(message))
// })

const BlockRoute = () => (
  <BrowserRouter
    getUserConfirmation={(message, callback) => {
      const modal = document.getElementById('modal')
      modal.style.display = 'block'
      this.cb = callback
    }}
  >
    <div>
      <Link to="/subblockroute">block route</Link>
      <div id="modal" style={{width: '100px', height: '100px', display: 'none'}}>
        <button onClick={() => this.cb(true)}>确定</button>
        <button>取消</button>
      </div>

      <Prompt when={true} message='aaa' />
      
      <Route path="/subblockroute" component={subRoute} />
      </div>
      </BrowserRouter>
    )
    
    const subRoute = (props) => (
      <div>
      <h6>subRoute</h6>
      <Link to="/">back</Link>
      
  </div>
)

export default BlockRoute
