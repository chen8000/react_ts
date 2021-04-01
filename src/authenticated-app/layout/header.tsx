/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-31 19:19:18
 * @LastEditTime: 2021-04-01 19:31:43
 * @LastEditors: zhanghui.chen
 */
import { useDispatch } from "react-redux";
import { Menu, Dropdown, Avatar, Layout } from "antd";
import { ModuleName, CaretDownOutlinedIcon } from "./styled";
import { logout } from "store/user/actions";
import { useNavigate } from "react-router";

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout);
    navigate("/");
  };
  return (
    <Layout.Header className={"header"}>
      <ModuleName>恶意网址</ModuleName>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="0" onClick={handleLogout}>
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
          {/* <HeaderUserName>{userInfo?.name} </HeaderUserName> */}
          <CaretDownOutlinedIcon />
        </p>
      </Dropdown>
    </Layout.Header>
  );
};
