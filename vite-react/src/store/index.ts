import { configureStore } from '@reduxjs/toolkit'
// 初始化数据
const initialState = {
  name: 'zayyo',
  age: 18,
  sex: '男'
}
// Reducer：定义如何更新状态
const rootReducer = (state = initialState, action: any) => {
  // 根据 action 类型来更新状态
  // 返回新的状态
  return state
}
// 创建store
const store = configureStore({
  reducer: rootReducer
})
export default store
