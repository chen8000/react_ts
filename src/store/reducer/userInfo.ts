/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 14:43:43
 * @LastEditTime: 2021-03-30 16:51:26
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
      return action.user_info;
    default:
      return state || null;
  }
};

// action 返回一个type{}
const setUserInfo = <S>(user_info: S): UserAction => ({
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
    data: {
      ...values,
      password: md5(values.password),
    },
  });

  //---
  if (result.code !== 200) {
    message.warning(result.message);
    return;
  }

  // --设置user信息
  dispatch(setUserInfo(result));

  // 设置用户登录状态
  window.localStorage.setItem(
    "user_info",
    JSON.stringify({
      code_list: result.code_list,
      link_list: result.link_list,
      name: result.name,
      userid: result.userid,
    })
  );
  // 设置token
  window.localStorage.setItem("token", result.token);
};

// 退出登录
const logout = (dispatch: AppDispatch) => {
  /*
    1. 清除userInfoState
    2. 清除token和user_info
   */
  dispatch(setUserInfo(null));
  window.localStorage.removeItem("user_info");
  window.localStorage.removeItem("token");
};

export { userInfoState, login, logout };
