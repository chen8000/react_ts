/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-26 15:24:07
 * @LastEditTime: 2021-03-31 19:32:31
 * @LastEditors: zhanghui.chen
 */

import { Navigate, Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";

import { LayoutContainer } from "./styled";
import { SiderContainer } from "./sider";
import { HeaderContainer } from "./header";

import { MaliciousUrl } from "../maliciousUrl/index";
import { AuditStatistics } from "../auditStatistics/index";
import { ManpowerAudit } from "../manpowerAudit/index";
import { Organization } from "../organization/index";
import { WebsiteAudit } from "../websiteAudit/index";

const { Content } = Layout;

export const AuthenticatedApp = () => {
  return (
    <LayoutContainer>
      <Layout>
        <SiderContainer></SiderContainer>
        <Layout>
          <HeaderContainer></HeaderContainer>
          <Content>
            <Router>
              <Routes>
                <Route path={"/maliciousUrl"} element={<MaliciousUrl />} />
                <Route
                  path={"/auditStatistics"}
                  element={<AuditStatistics />}
                />
                <Route path={"/manpowerAudit"} element={<ManpowerAudit />} />
                <Route path={"/organization"} element={<Organization />} />
                <Route path={"/websiteAudit"} element={<WebsiteAudit />} />
                <Navigate to={"/maliciousUrl"} />
              </Routes>
            </Router>
          </Content>
        </Layout>
      </Layout>
    </LayoutContainer>
  );
};
