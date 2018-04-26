import {connect} from 'react-redux'
import Zen from '../components/Zen'
import {fetchZen, clearZen} from '../modules/zen'

const mapStateToProps = (state) => ({
  zen: state.zen
})

const mapDispatchToProps = {
  fetchZen,
  clearZen
}

export default connect(mapStateToProps, mapDispatchToProps)(Zen)
