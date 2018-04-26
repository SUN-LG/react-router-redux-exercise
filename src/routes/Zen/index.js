import zen from './modules/zen'
import asyncComponent from '../../utils/HOC'

export {
  zen
}

export default asyncComponent(
  () => import('./containers/ZenContainer'),
  {zen: () => import('./modules/zen')}
)
