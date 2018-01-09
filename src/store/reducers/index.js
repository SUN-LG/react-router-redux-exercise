import {combineReducers} from 'redux'
import {counter} from '../../routes/Counter'
import {elapse} from '../../routes/Elapse'

export default combineReducers({
  counter,
  elapse
})
