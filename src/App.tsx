/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-23 12:21:11
 * @LastEditTime: 2021-03-31 19:28:40
 * @LastEditors: zhanghui.chen
 */

import "./App.css";
import { UnauthenticatedApp } from "unauthenticated-app";
import { AuthenticatedApp } from "authenticated-app/layout";
import { useGetUserInfo } from "utils";

function App() {
  // 获取用户登录状态
  const { userInfo } = useGetUserInfo();
  return (
    <div className="App">
      {!!userInfo ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
