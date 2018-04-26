import {connect} from 'react-redux'
import Elapse from '../components/Elapse'
import {plus} from '../modules/elapse'

const mapStateToProps = (state) => {
  return {elapse: state.elapse}
}

const mapActionToProps = { plus }

export default connect(mapStateToProps, mapActionToProps)(Elapse)
