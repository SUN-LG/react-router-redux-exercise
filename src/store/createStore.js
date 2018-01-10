import {applyMiddleware, compose, createStore} from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import reducers, {reducersList} from './reducers/index'
import {updateLocation} from './location'

const browserHistory = createBrowserHistory()
// export default (initialState = {}) => {
// 取消下面initalState的注释
// const initialState = {}

/**
 * 中间件
 */
const middlewares = [thunk]

/**
 * 增强器
 */
const enhancers = []

const store = createStore(
  reducers,
  {}, // initialState
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
)

store.reducersList = reducersList
store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

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
