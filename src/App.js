import React, { Component } from 'react'
import TabControl from './TabControl'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTitle: '最新',
      titles: ['最新', '精选', '流行']
    }
  }
  render () {
    const { titles, currentTitle } = this.state
    return (
      <div>
        <TabControl
          titles={titles}
          itemClick={index => this.itemClick(index)}
        />
        <h2>{currentTitle}</h2>
      </div>
    )
  }
  itemClick (index) {
    this.setState({
      currentTitle: this.state.titles[index]
    })
  }
}
