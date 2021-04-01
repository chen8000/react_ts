/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 14:47:47
 * @LastEditTime: 2021-04-01 17:33:48
 * @LastEditors: zhanghui.chen
 */

import { USER_LOGIN_STATUS } from "./actionTypes";

// user State 类型
export interface UserInfoStateType {
  loginStatus?: boolean; // 用户是否登录，false未登录
  link_list?: string[];
}

// user menu 接口类型
export interface MenuLinkListType {
  children?: boolean;
  create_time?: string;
  grade_type?: number;
  icon?: string;
  link?: string;
  menu_id?: number;
  name?: string;
  sort_id?: number;
  super_type?: number;
}

// user action 类型
export interface UserAction {
  type: typeof USER_LOGIN_STATUS;
  payload: UserInfoStateType;
}
