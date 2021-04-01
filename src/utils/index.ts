/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-26 11:47:22
 * @LastEditTime: 2021-04-01 19:14:15
 * @LastEditors: zhanghui.chen
 */

import { useSelector } from "react-redux";
import { US } from "unauthenticated-app/types";

/**
 * @name: useGetUserInfo
 * @msg: 返回用户的登录状态
 * @param {*} null
 * @return {*} boolean
 */

export const useGetUserInfo = () => {
  // 1. 用户登录后设置userInfo || 获取本地存储的用户登录状态
  let userInfo =
    useSelector<US, US["userInfoState"]>((state) => state.userInfoState) ||
    window.localStorage.getItem("user_info");

  const userMenu = JSON.parse(String(window.localStorage.getItem("user_menu")));

  /*
    以上两个条件满足其一，即视为用户已登录
  */

  if (typeof userInfo === "string") {
    userInfo = JSON.parse(userInfo);
  }

  return { userInfo, userMenu };
};

export const getUserLoginStatus = () => {
  return !!(
    window.localStorage.getItem("token") &&
    window.localStorage.getItem("user_id")
  );
};
