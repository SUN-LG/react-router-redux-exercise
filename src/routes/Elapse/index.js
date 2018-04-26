import elapse from './modules/elapse'
import asyncComponent from '../../utils/HOC'

export {elapse}
export default asyncComponent(
  () => import('./containers/ElapseContainer'),
  {elapse: () => import('./modules/elapse')}
)
