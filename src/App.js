import React, { Component, createRef } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.titleRef = createRef()
    this.titleP = null
  }
  render () {
    return (
      <div>
        <h2>React Demo</h2>
        <p ref="thisp">this is p</p>
        <p ref={this.titleRef}>this is another p</p>
        <p ref={arg => this.titleP = arg}>this is third p</p>
        <button onClick={e => this.changeIt()}>click me</button>
      </div>
    )
  }
  changeIt () {
    console.log(this.refs.thisp)
    this.refs.thisp.innerHTML = 'xxxxx'

    console.log(this.titleRef.current)
    this.titleRef.current.innerHTML = 'xxxxx'

    console.log(this.titleP)
    this.titleP.innerHTML = 'xxxxx'
  }
}