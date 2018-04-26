/**
 * constants
 */
const PLUS = 'PLUS'

/**
 * actions
 */
function plus() {
  return {
    type: PLUS
  }
}

/**
 * action handler
 */
const ACTION_HANDLERS = {
  [PLUS]: state => state + 1
}

/**
 * reducers
 */
const initialState = 0
function elapseReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export {
  PLUS,
  plus
}

export default elapseReducer
