# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

## 目录

1. 父子组件之间传递数据（branch tabcontrol)
  - 父传子
    - 父组件通过`属性=值`的方式传递给子组件数据
    - 子组件通过`props`参数获取父组件传递过来的数据
  - 子传父
    - 和父传子一样，也是通过`props`传递数据，只不过是让父组件给子组件传递一个回调函数，在子组件中调用这个函数即可

2. 模拟Vue中的slot
  虽然React中没有Vue的插槽，但可以实现类似功能，根本原理就是jsx可以当成参数传递给组件；  
  - 可以将jsx放在元素内部，子组件可通过`props.children`获取
  - 也可以将jsx放在属性中传递给子组件



