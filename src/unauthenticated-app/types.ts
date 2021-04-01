/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 16:56:44
 * @LastEditTime: 2021-04-01 18:36:08
 * @LastEditors: zhanghui.chen
 */
import { UserInfoStateType } from "store/user/types";
export interface UserLogin {
  username: string;
  password: string;
}
export interface US {
  userInfoState: UserInfoStateType;
}

export interface SetUserLoginStatusType {
  setUserLoginStatus: (param: boolean) => void;
}
