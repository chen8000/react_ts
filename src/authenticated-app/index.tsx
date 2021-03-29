/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-26 10:59:17
 * @LastEditTime: 2021-03-29 12:16:05
 * @LastEditors: zhanghui.chen
 */
// 路由
import { Navigate, Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "antd";
import { logout } from "store/reducer/userInfo";
import { useDispatch } from "react-redux";
import { LayoutComponent } from "./layout";
import { UrlList } from "./urllist";

export const AuthenticatedApp = () => {
  const dispatch = useDispatch();
  // 登出
  const handleLogout = () => {
    dispatch(logout);
  };
  return (
    <LayoutComponent>
      <>
        <Button type={"primary"} onClick={handleLogout}>
          退出登录
        </Button>
        <Router>
          <Routes>
            <Route path={"/urllist"} element={<UrlList />} />
            <Navigate to={"/urllist"} />
          </Routes>
        </Router>
      </>
    </LayoutComponent>
  );
};
