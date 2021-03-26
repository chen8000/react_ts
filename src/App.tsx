/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-23 12:21:11
 * @LastEditTime: 2021-03-26 11:37:26
 * @LastEditors: zhanghui.chen
 */

import "./App.css";
import { UnauthenticatedApp } from "unauthenticated-app";
import { AuthenticatedApp } from "authenticated-app";
import { useSelector } from "react-redux";
import { US } from "unauthenticated-app/types";

function App() {
  // 1. 用户登录后设置userInfo
  const userInfo = useSelector<US, US["userInfoState"]>(
    (state) => state.userInfoState
  );
  // 2. 获取本地存储的用户登录状态
  const userLogin = window.localStorage.getItem("user_login");

  /*
    以上两个条件满足其一，即视为用户已登录
  */
  return (
    <div className="App">
      {!!userLogin || userInfo?.name ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )}
    </div>
  );
}

export default App;
