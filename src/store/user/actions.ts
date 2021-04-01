/*
 * @Author: zhanghui.chen
 * @Date: 2021-04-01 16:13:21
 * @LastEditTime: 2021-04-01 19:21:44
 * @LastEditors: zhanghui.chen
 */

import { message } from "antd";
import md5 from "js-md5";
import { AppDispatch } from "store";
import { UserLogin } from "unauthenticated-app/types";
import { http } from "utils/http";
import { USER_LOGIN_STATUS } from "./actionTypes";
import { UserAction } from "./types";

// action 返回一个type{}
export const setUserInfo = <S>(payload: S): UserAction => ({
  type: USER_LOGIN_STATUS,
  payload,
});

// 登录
export const login = (values: UserLogin) => async (dispatch: AppDispatch) => {
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

  // 设置token
  window.localStorage.setItem("token", result.token);
  window.localStorage.setItem("user_id", result.userid);
  window.localStorage.setItem("username", values.username);

  // 获取权限
  getJurisdiction(dispatch);
};

// 退出登录
export const logout = (dispatch: AppDispatch) => {
  /*
    1. 修改loginStatus
    2. 清除localStorage
   */
  window.localStorage.clear();
  dispatch(setUserInfo({ loginStatus: false }));
};

// 获取用户权限列表
export const getJurisdiction = async (dispatch: AppDispatch) => {
  // const dispatch = useDispatch();
  // 1. 判断local里是否有token和用户id
  // 2. yes，正常请求
  // 3. no，退出登录
  const token = window.localStorage.getItem("token");
  const user_id = window.localStorage.getItem("user_id");

  if (!token || !user_id) {
    // dispatch();
    // 退出登录
    return;
  }

  const result = await http("/get_jurisdiction", {
    data: {
      user_id,
    },
  });

  if (result.code !== 200) {
    message.warning("获取权限失败！");
    return;
  }

  dispatch(setUserInfo({ ...result, loginStatus: true }));
};
