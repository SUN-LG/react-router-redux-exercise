
import asyncComponent from '../../utils/HOC'
import counter from './modules/counter'

export {
  counter
}

export default asyncComponent(
  () => import('./containers/CounterContainer'),
  { counter: () => import('./modules/counter') }
)
