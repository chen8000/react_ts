/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-26 15:24:07
 * @LastEditTime: 2021-03-30 16:59:23
 * @LastEditors: zhanghui.chen
 */
import { LayoutPropsType } from "./types";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import {
  LayoutContainer,
  LogoContainer,
  OutlinedContainer,
  ModuleName,
  HeaderUserName,
} from "./styled";
import Logo from "assets/images/logo.png";
import { CSSTransition } from "react-transition-group";
import { useGetUserLoginType } from "utils";
import { logout } from "store/reducer/userInfo";
import { useDispatch } from "react-redux";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

export const LayoutComponent = (props: LayoutPropsType) => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  const userInfo = useGetUserLoginType();
  return (
    <LayoutContainer>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={270}>
          <LogoContainer>
            <img width={"24px"} src={Logo} alt="" />
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
          <OutlinedContainer
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            {collapsed ? <RightOutlined /> : <LeftOutlined />}
          </OutlinedContainer>

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
        <Layout>
          <Header className={"header"}>
            <ModuleName>恶意网址</ModuleName>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item
                    key="0"
                    onClick={() => {
                      dispatch(logout);
                    }}
                  >
                    退出登录
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <p onClick={(e) => e.preventDefault()}>
                {/* 头像👮 */}
                <Avatar
                  src={
                    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  }
                  style={{ marginRight: ".7rem" }}
                />
                <HeaderUserName>{userInfo.name} </HeaderUserName>
                <CaretDownOutlined />
              </p>
            </Dropdown>
          </Header>
          <Content
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
