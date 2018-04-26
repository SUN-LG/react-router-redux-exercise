/**
 * constants
 */
const REQUEST_ZEN = 'REQUEST_ZEN'
const RECEIVE_ZEN = 'RECEIVE_ZEN'
const CLEAR_ZEN = 'CLEAR_ZEN'

/**
 * action creators
 */
function requestZen() {
  return {
    type: REQUEST_ZEN
  }
}

let avaliableId = 0
function receiveZen(value) {
  return {
    type: RECEIVE_ZEN,
    payload: {
      text: value,
      id: avaliableId++
    }
  }
}

function clearZen() {
  return {
    type: CLEAR_ZEN
  }
}

const fetchZen = () => (dispatch, getState) => {
  if (getState().zen.fetching) return

  dispatch(requestZen())
  return fetch('https://api.github.com/zen')
    .then(data => data.text())
    .then(text => dispatch(receiveZen(text)))
}

/**
 * action handlers
 */
const ACTION_HANDLERS = {
  [REQUEST_ZEN]: (state, action) => ({
    ...state,
    fetching: true
  }),
  [RECEIVE_ZEN]: (state, action) => ({
    ...state,
    fetching: false,
    text: state.text.concat(action.payload)
  }),
  [CLEAR_ZEN]: (state, action) => ({
    ...state,
    text: []
  })
}

/**
 * reducer
 */
const initialState = {
  fetching: false,
  text: []
}

function zenReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export {
  REQUEST_ZEN,
  RECEIVE_ZEN,
  CLEAR_ZEN,
  receiveZen,
  requestZen,
  fetchZen,
  clearZen
}

export default zenReducer
