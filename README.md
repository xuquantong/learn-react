# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

模拟Vue中的slot 虽然React中没有Vue的插槽，但可以实现类似功能，根本原理就是jsx可以当成参数传递给组件；  
- 可以将jsx放在元素内部，子组件可通过`props.children`获取  
- 也可以将jsx放在属性中传递给子组件，子组件通过`props`获取
  

