import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

// export default (initialState = {}) => {
// 取消下面initalState的注释
// const initialState = {}
const middlewares = [thunk]

const enhancers = []

const store = createStore(
  reducers,
  {}, // initialState
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
// 直接返回store，如果返回一个生产store的函数，react-hot-loader会提示错误
// https://github.com/reactjs/react-redux/releases/tag/v2.0.0
export default store
