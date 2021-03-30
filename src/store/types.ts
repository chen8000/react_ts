/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 14:47:47
 * @LastEditTime: 2021-03-30 18:26:41
 * @LastEditors: zhanghui.chen
 */

import { USER_INFO } from "./actionTypes";

// user State 类型
export interface UserInfoStateType {
  username?: string;
  code?: number;
  code_list?: string;
  link_list?: string;
  login_check?: number;
  message?: boolean;
  name?: string;
  token?: string;
  userid?: number;
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
  type: typeof USER_INFO;
  user_info?: UserInfoStateType;
}
