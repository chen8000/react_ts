/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-25 14:43:43
 * @LastEditTime: 2021-03-30 18:35:22
 * @LastEditors: zhanghui.chen
 */
import md5 from "js-md5";
import { AppDispatch } from "store";
import { http } from "utils/http";
import { UserLogin } from "unauthenticated-app/types";
import { USER_INFO } from "../actionTypes";
import { MenuLinkListType, UserAction, UserInfoStateType } from "../types";
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
  window.localStorage.setItem("username", values.username);

  // 登录成功后获取所有菜单
  getMenu(result.link_list.split(","));
};

// 退出登录
const logout = (dispatch: AppDispatch) => {
  /*
    1. 清除userInfoState
    2. 清除token和user_info
   */
  dispatch(setUserInfo(null));
  window.localStorage.removeItem("username");
  window.localStorage.removeItem("user_info");
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user_menu");
};

// 获取菜单
const getMenu = async (link_list: string[]) => {
  let result = await http("/get_menu", {
    token: window.localStorage.getItem("token") || "",
    username: window.localStorage.getItem("username") || "",
  });
  if (result.code !== 200) {
    console.warn("get_menu接口状态异常，请检查代码");
    return;
  }
  let userLinkList = result.data.link_list.filter((res: MenuLinkListType) =>
    link_list.includes(String(res.menu_id))
  );

  // 存储用户权限列表
  window.localStorage.setItem("user_menu", JSON.stringify(userLinkList));
};

export { userInfoState, login, logout };
