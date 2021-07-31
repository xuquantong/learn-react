# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

### 高阶组件

#### 什么是高阶组件呢？
• 官方定义：高阶组件是参数为组件，返回值为新组建的函数  
• 首先，高阶组件本身不是一个组件，是一个函数  
• 其次，这个函数的参数是一个组件，返回值也是一个组件  
高阶组件的调用形式类似于这样：  
`const EnhancedComponent = higherOrderComponent(WrappedComponent)`