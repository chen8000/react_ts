/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-26 15:24:07
 * @LastEditTime: 2021-04-21 11:45:02
 * @LastEditors: zhanghui.chen
 */

import { Navigate, Routes, Route } from "react-router";
// import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";

import { LayoutContainer } from "./styled";
import { SiderContainer } from "./sider";
import { HeaderContainer } from "./header";

import { About } from "../about";
import { Home } from "../home";
import { Aboutyou } from "../aboutyou";
import { Aboutthem } from "../aboutthem";

export const AuthenticatedApp = () => {
  return (
    <LayoutContainer>
      <Layout>
        {/* 处理权限列表 */}
        <SiderContainer></SiderContainer>
        <Layout>
          <HeaderContainer></HeaderContainer>
          <Layout.Content>
            <Routes>
              <Route path={"/home"} element={<Home />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/aboutyou"} element={<Aboutyou />} />
              <Route path={"/aboutthem"} element={<Aboutthem />} />
              <Navigate to={"/home"} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    </LayoutContainer>
  );
};
