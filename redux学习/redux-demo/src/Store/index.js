// import { createStore } from 'redux'
// const store = createStore(rootReducer)
// createStore被弃用，请使用configureStore

// 关联 reducer 和action：由dispatch(action)触发reducer的操作，由subscribe()监听到变化后的state值
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../Reducer/index'
// 创建store
const store = configureStore(
    {reducer}
)

export default store