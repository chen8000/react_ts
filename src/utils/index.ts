/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-26 11:47:22
 * @LastEditTime: 2021-03-30 16:18:56
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
  // 1. 用户登录后设置userInfo || 获取本地存储的用户登录状态
  const userInfo =
    useSelector<US, US["userInfoState"]>((state) => state.userInfoState) ||
    window.localStorage.getItem("user_info");

  /*
    以上两个条件满足其一，即视为用户已登录
  */

  if (typeof userInfo === "string") {
    return JSON.parse(userInfo);
  }

  return userInfo;
};
