import React from 'react'
import Spinner from 'react-spinkit'
import './Zen.css'

const Zen = ({fetchZen, clearZen, zen: {fetching, text}}) => (
  <div>
    <div className="loading">
      {fetching ? <Spinner spinnerName="double-bounce" /> : null}
    </div>
    <div>
    <button className="btn btn-default" onClick={fetchZen}>
      {fetching ? 'Fetching...' : 'Fetch'}
    </button>
    <button className="btn btn-default" onClick={clearZen}>Clear</button>
    </div>
    <div>
      {text.map(item => <h2 key={item.id}>{item.text}</h2>)}
    </div>
  </div>
)

export default Zen
