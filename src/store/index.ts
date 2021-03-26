/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 11:17:34
 * @LastEditTime: 2021-03-26 10:06:03
 * @LastEditors: zhanghui.chen
 */

import { combineReducers, createStore, applyMiddleware } from "redux";
import { userInfoState } from "./reducer/userInfo";
import thunk from "redux-thunk";

// 整合 reducer
const reducer = combineReducers({ userInfoState });

// 注册
const store = createStore(reducer, applyMiddleware(thunk));

// dispatch类型
export type AppDispatch = typeof store.dispatch;

export default store;
