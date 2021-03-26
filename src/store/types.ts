/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 14:47:47
 * @LastEditTime: 2021-03-26 11:27:09
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
// user action 类型
export interface UserAction {
  type: typeof USER_INFO;
  user_info?: UserInfoStateType;
}
