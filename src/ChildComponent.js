import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        {/* <h2>----------第一种方式------------</h2>
        <div>{this.props.children[0]}</div>
        <div>{this.props.children[1]}</div>
        <div>{this.props.children[2]}</div> */}
        <h2>----------第二种方式------------</h2>
        <div>{this.props.first}</div>
        <div>{this.props.second}</div>
        <div>{this.props.another}</div>
      </div>
    )
  }
}
