/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 16:56:44
 * @LastEditTime: 2021-03-25 18:57:21
 * @LastEditors: zhanghui.chen
 */
import { UserInfoStateType } from "store/types";
export interface UserLogin {
  username: string;
  password: string;
}
export interface US {
  userInfoState: UserInfoStateType;
}
