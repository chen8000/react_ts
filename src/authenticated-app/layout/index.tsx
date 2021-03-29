/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-26 15:24:07
 * @LastEditTime: 2021-03-29 18:47:31
 * @LastEditors: zhanghui.chen
 */
import { LayoutPropsType } from "./types";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { LayoutContainer, LogoContainer } from "./styled";
import Logo from "assets/images/logo.png";
import { CSSTransition } from "react-transition-group";

const { Header, Sider, Content } = Layout;

export const LayoutComponent = (props: LayoutPropsType) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LayoutContainer>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={270}>
          <LogoContainer>
            <img className={"logo"} width={"24px"} src={Logo} alt="" />
            <p className={"title"}>
              <CSSTransition
                in={!collapsed}
                timeout={300}
                classNames={"fade"}
                unmountOnExit
              >
                <span>反欺诈人工审核系统</span>
              </CSSTransition>
            </p>
          </LogoContainer>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {collapsed ? (
              <MenuUnfoldOutlined
                className={"trigger"}
                onClick={() => {
                  setCollapsed(!collapsed);
                }}
              />
            ) : (
              <MenuFoldOutlined
                className={"trigger"}
                onClick={() => {
                  setCollapsed(!collapsed);
                }}
              />
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </LayoutContainer>
  );
};
