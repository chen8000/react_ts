/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-26 15:24:07
 * @LastEditTime: 2021-04-09 17:58:09
 * @LastEditors: zhanghui.chen
 */

import { Navigate, Routes, Route } from "react-router";
// import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";

import { LayoutContainer } from "./styled";
import { SiderContainer } from "./sider";
import { HeaderContainer } from "./header";

import { MaliciousUrl } from "../maliciousUrl/index";
import { AuditStatistics } from "../auditStatistics/index";
import { ManpowerAudit } from "../manpowerAudit/index";
import { Organization } from "../organization/index";
import { WebsiteAudit } from "../websiteAudit/index";
import { Roles } from "../roles";
import { Users } from "../users";

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
              <Route path={"/maliciousUrl"} element={<MaliciousUrl />} />
              <Route path={"/auditStatistics"} element={<AuditStatistics />} />
              <Route path={"/manpowerAudit"} element={<ManpowerAudit />} />
              <Route path={"/organization"} element={<Organization />}></Route>
              <Route path={"/websiteAudit"} element={<WebsiteAudit />} />
              <Route path={"/organization/roles"} element={<Roles />} />
              <Route path={"/organization/users"} element={<Users />} />

              <Navigate to={"/maliciousUrl"} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    </LayoutContainer>
  );
};
