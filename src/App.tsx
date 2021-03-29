/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-23 12:21:11
 * @LastEditTime: 2021-03-26 15:20:03
 * @LastEditors: zhanghui.chen
 */

import "./App.css";
import { UnauthenticatedApp } from "unauthenticated-app";
import { AuthenticatedApp } from "authenticated-app";
import { useGetUserLoginType } from "utils";

function App() {
  // 获取用户登录状态
  const userLoginType = useGetUserLoginType();
  return (
    <div className="App">
      {userLoginType ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
