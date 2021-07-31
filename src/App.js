import React, { Component, PureComponent } from 'react'

class App extends Component {
  render () {
    return (
      <div>
        <h2>hello react</h2>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

function enhanceComponent (WrappedComponent) {
  class newComponent extends PureComponent {
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
  // 可通过displayName来修改组件的名称
  newComponent.displayName = 'xqt'
  return newComponent
}

const EnhanceComponent = enhanceComponent(App)
export default EnhanceComponent
