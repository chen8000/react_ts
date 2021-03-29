/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-26 11:47:22
 * @LastEditTime: 2021-03-26 12:12:19
 * @LastEditors: zhanghui.chen
 */

import { useSelector } from "react-redux";
import { US } from "unauthenticated-app/types";

/**
 * @name: useGetUserLoginType
 * @msg: 返回用户的登录状态
 * @param {*} null
 * @return {*} boolean
 */

export const useGetUserLoginType = () => {
  // 1. 用户登录后设置userInfo
  const userInfo = useSelector<US, US["userInfoState"]>(
    (state) => state.userInfoState
  );
  // 2. 获取本地存储的用户登录状态
  const userLogin = window.localStorage.getItem("user_login");

  /*
    以上两个条件满足其一，即视为用户已登录
  */

  return !!userInfo?.name || !!userLogin;
};
