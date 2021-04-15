/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-31 19:19:18
 * @LastEditTime: 2021-04-14 14:14:42
 * @LastEditors: zhanghui.chen
 */
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown, Avatar, Layout } from "antd";
import { ModuleName, CaretDownOutlinedIcon, HeaderUserName } from "./styled";
import { logout } from "store/user/actions";
import { useNavigate, useLocation } from "react-router";
import { US } from "unauthenticated-app/types";
import { useEffect, useState, useCallback } from "react";
import { ChangePasswod } from "./changePassword";

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [headerModuleName, setHeaderModuleName] = useState("");
  const [passwoldVisible, setPasswoldVisible] = useState(false);
  const pathname = location.pathname.split("/");
  const userInfo = useSelector<US, US["userInfoState"]>(
    (state) => state.userInfoState
  );

  // 打开修改密码弹窗
  const onOpenChangePassword = () => {
    setPasswoldVisible(true);
  };

  // 关闭修改密码弹窗
  const onCloseChangePassword = () => {
    setPasswoldVisible(false);
  };

  const returnModuleName = useCallback(() => {
    return String(
      pathname.length > 2
        ? userInfo.linkList
            ?.filter((res) => res.children?.length)[0]
            ?.children?.filter((res) => res.link === `/${pathname[2]}`)[0]
            ?.name || ""
        : userInfo.linkList?.filter((res) => res.link === `/${pathname[1]}`)[0]
            ?.name || ""
    );
  }, [pathname, userInfo]);

  const handleLogout = () => {
    dispatch(logout);
    navigate("/");
  };

  useEffect(() => {
    setHeaderModuleName(returnModuleName());
  }, [location, userInfo, returnModuleName]);

  return (
    <>
      <Layout.Header className={"header"}>
        <ModuleName>{headerModuleName}</ModuleName>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="0" onClick={onOpenChangePassword}>
                修改密码
              </Menu.Item>
              <Menu.Item key="1" onClick={handleLogout}>
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
            <HeaderUserName>{userInfo.name}</HeaderUserName>
            <CaretDownOutlinedIcon />
          </p>
        </Dropdown>
      </Layout.Header>
      {/* 修改密码弹窗 */}
      <ChangePasswod
        visible={passwoldVisible}
        onCloseChangePassword={onCloseChangePassword}
      />
    </>
  );
};

// 修改密码 抽屉组件
