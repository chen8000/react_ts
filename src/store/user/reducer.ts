/*
 * @Author: zhanghui.chen
 * @Date: 2021-04-01 16:13:11
 * @LastEditTime: 2021-04-06 18:10:18
 * @LastEditors: zhanghui.chen
 */

import { USER_LOGIN_STATUS } from "./actionTypes";
import { UserAction, UserInfoStateType } from "./types";

// initial state
const initialState: UserInfoStateType = {
  loginStatus: false, // 登录状态
  menus: [], // 当前用户对应的菜单
};

export const userInfoState = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USER_LOGIN_STATUS:
      //修改用户登录状态
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state || null;
  }
};
