import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import './index.scss'
import App from './layouts/CoreLayout'

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  // './layouts/CoreLayout.js',会导致HMR失效，原因未知
  module.hot.accept('./layouts/CoreLayout', () => {
    render(App)
  })
}
