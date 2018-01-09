import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

// export default (initialState = {}) => {
const middlewares = [thunk]

const enhancers = []

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
)

if (module.hot) {
  module.hot.accept('./reducers/index', () => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

  // return store
// }
export default store
