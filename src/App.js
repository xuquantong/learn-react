import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>React Demo</h2>
        {/* <ChildComponent>
          <div>first div<p>first div p</p></div>
          <div>second div</div>
          <div>another div</div>
        </ChildComponent> */}
        <ChildComponent
          first={<div>first div<p>first div p</p></div>}
          second={<div>second div</div>}
          another={<div>another div</div>}
        />
      </div>
    )
  }
}
