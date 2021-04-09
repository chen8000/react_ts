/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-31 19:19:33
 * @LastEditTime: 2021-04-09 15:14:54
 * @LastEditors: zhanghui.chen
 */
import { useState } from "react";
import { Menu, Layout } from "antd";
import {
  LogoContainer,
  OutlinedContainer,
  SubMenuIconActive,
  SubMenuIcon,
} from "./styled";
import { CSSTransition } from "react-transition-group";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { MenuLinkListType } from "store/user/types";
import { CollapsedType } from "./types";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "assets/images/logo.png";
import { US } from "unauthenticated-app/types";

export const SiderContainer = () => {
  const [collapsed, setCollapsed] = useState(false);

  const userInfo = useSelector<US, US["userInfoState"]>(
    (state) => state.userInfoState
  );
  const location = useLocation();
  const pathname = location.pathname.split("/");

  // 匹配当前路由对应模块的tab选中
  const getMenuKey = () => {
    return userInfo.linkList?.filter((res) => res.link === `/${pathname[1]}`)[0]
      ?.menu_id;
  };

  const subSelectKey = () => {
    return userInfo.linkList
      ?.filter((res) => res.children?.length)[0]
      ?.children?.filter((res) => res.link === `/${pathname[2]}`)[0]?.menu_id;
  };

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed} width={270}>
      <LogoGroup collapsed={collapsed} />
      <OutlinedGroup collapsed={collapsed} setCollapsed={setCollapsed} />

      {getMenuKey() && (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[String(getMenuKey())]}
          defaultOpenKeys={[String(getMenuKey())]}
          selectedKeys={[
            String(subSelectKey() ? subSelectKey() : getMenuKey()),
          ]}
        >
          {userInfo.linkList?.map((item: MenuLinkListType) => {
            return item.children?.length ? (
              <Menu.SubMenu
                key={String(item.menu_id)}
                title={item.name}
                icon={
                  <i className={`iconfont ant-menu-item-icon ${item.icon}`}></i>
                }
              >
                {item.children.map((childrenItem) => (
                  <Menu.Item
                    key={String(childrenItem.menu_id)}
                    icon={
                      subSelectKey() &&
                      subSelectKey() === childrenItem.menu_id ? (
                        <SubMenuIconActive />
                      ) : (
                        <SubMenuIcon />
                      )
                    }
                  >
                    <Link to={`${item.link}${childrenItem.link}`}>
                      {childrenItem.name}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                icon={<i className={`iconfont ${item.icon}`}></i>}
                key={String(item.menu_id)}
              >
                <Link to={`${item.link}`}>{item.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      )}
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
