/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 14:47:47
 * @LastEditTime: 2021-04-21 11:10:20
 * @LastEditors: zhanghui.chen
 */

import { USER_LOGIN_STATUS } from "./actionTypes";

// user State 类型
export interface UserInfoStateType {
  loginStatus?: boolean; // 用户是否登录，false未登录
  menus?: MenuLinkListType[]; // 当前用户的权限列表
  // name?: string; // 用户名称
}

// 权限接口类型
export interface JurisdictionType {
  code_list?: string;
  link_list?: string;
  name?: string;
  userid?: number;
}

// user menu 接口类型
export interface MenuLinkListType {
  id?: number;
  name?: string;
  parentId?: number;
  path?: string;
  children?: MenuLinkListType[];
}

// user action 类型
export interface UserAction {
  type: typeof USER_LOGIN_STATUS;
  payload: UserInfoStateType;
}
