/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 14:43:43
 * @LastEditTime: 2021-03-26 11:29:11
 * @LastEditors: zhanghui.chen
 */
import md5 from "js-md5";
import { AppDispatch } from "store";
import { http } from "utils/http";
import { UserLogin } from "unauthenticated-app/types";
import { USER_INFO } from "../actionTypes";
import { UserAction, UserInfoStateType } from "../types";
import { message } from "antd";

// reducer
const userInfoState = (state: UserInfoStateType, action: UserAction) => {
  switch (action.type) {
    case USER_INFO:
      return { ...state, ...action.user_info };
    default:
      return state || null;
  }
};

// action
const setUserInfo = (user_info: UserInfoStateType): UserAction => ({
  type: USER_INFO,
  user_info,
});

// 登录
const login = (values: UserLogin) => async (dispatch: AppDispatch) => {
  // 验证输入是否合格
  if (!values.username) {
    message.warning("请输入用户名");
    return;
  }
  if (!values.password) {
    message.warning("请输入密码");
    return;
  }

  // 验证通过
  const result = await http("/login", {
    method: "get",
    data: { ...values, password: md5(values.password) },
  });

  //---
  if (result.code !== 200) {
    message.warning(result.message);
    return;
  }

  // --设置user信息
  dispatch(setUserInfo(result));

  // 设置用户登录状态
  window.localStorage.setItem("user_login", "1");
  // 设置token
  window.localStorage.setItem("token", result.token);
};

export { userInfoState, login };
