import React, {Component} from 'react'
import {injectAsyncReducer} from '../store/reducers'

export default function AsyncComponent(importComponent, reducer) {
  class AsyncComponent extends Component {
    state = {
      component: null
    }

    processReducer = (reducer) => {
      if (Array.isArray(reducer)) {
        return Promise.all(reducer.map(r => this.processReducer(r)))
      } else if (typeof reducer === 'object') {
        const key = Object.keys(reducer)[0]

        return reducer[key]().then(m => {
          injectAsyncReducer(key, m.default)
        })
      } else {
        return Promise.resolve()
      }
    }

    async componentDidMount() {
      const {default: component} = await importComponent()

      this.processReducer(reducer).then(() => {
        this.setState({component})
      })
    }

    render() {
      const C = this.state.component

      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}
