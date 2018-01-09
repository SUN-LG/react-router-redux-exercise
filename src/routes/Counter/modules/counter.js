/**
 * constants
 */
const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

/**
 * actions
 */
// function increment({value = 1} = {value: 1})
function increment(value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

function double(count) {
  return {
    type: COUNTER_DOUBLE_ASYNC,
    payload: count
  }
}

// thunk action creator
const doubleAsync = () => (dispatch, getState) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      dispatch(double(getState().counter))
    }, 200)
  })
}

/**
 * [ACTION_HANDLERS]
 */
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC]: (state, action) => state * 2
}

/**
 * reducer
 */
const initalState = 0
function counterReducer(state = initalState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export {
  COUNTER_INCREMENT,
  COUNTER_DOUBLE_ASYNC,
  increment,
  doubleAsync
}

export default counterReducer
