import {combineReducers} from 'redux'
import store from '../createStore'
import location from '../location'
// import {counter} from '../../routes/Counter'
// import {elapse} from '../../routes/Elapse'

function createAsyncRootReducer(key, asyncReducer) {
  if (!store.reducersList[key]) {
    store.reducersList = Object.assign({}, store.reducersList, {[key]: asyncReducer})
  }
  return combineReducers(store.reducersList)
}

function injectAsyncReducer(name, asyncReducer) {
  store.replaceReducer(createAsyncRootReducer(name, asyncReducer))
}

const reducersList = {
  location
  // elapse
}

export default combineReducers({
  location
  // counter,
  // elapse
})

export {
  injectAsyncReducer,
  reducersList
}
