/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-31 19:19:33
 * @LastEditTime: 2021-04-01 16:29:26
 * @LastEditors: zhanghui.chen
 */
import { useState } from "react";
import { useGetUserInfo } from "utils";
import { Menu, Layout } from "antd";
import { LogoContainer, OutlinedContainer } from "./styled";
import { CSSTransition } from "react-transition-group";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { MenuLinkListType } from "store/user/types";
import { CollapsedType } from "./types";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.png";

export const SiderContainer = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { userMenu } = useGetUserInfo();
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed} width={270}>
      <LogoGroup collapsed={collapsed} />
      <OutlinedGroup collapsed={collapsed} setCollapsed={setCollapsed} />

      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {userMenu.map((item: MenuLinkListType) => (
          <Menu.Item
            icon={<i className={`iconfont ${item.icon}`}></i>}
            key={String(item.menu_id)}
          >
            <Link to={`${item.link}`}>{item.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

// 左侧logo和标题  Omit从CollapsedType类型中剔除指定属性
const LogoGroup = ({ collapsed }: Omit<CollapsedType, "setCollapsed">) => {
  return (
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
  );
};
// 左侧收缩按钮
const OutlinedGroup = ({ collapsed, setCollapsed }: CollapsedType) => {
  return (
    <OutlinedContainer
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    >
      {collapsed ? <RightOutlined /> : <LeftOutlined />}
    </OutlinedContainer>
  );
};
