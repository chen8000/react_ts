/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-31 19:19:18
 * @LastEditTime: 2021-03-31 19:22:38
 * @LastEditors: zhanghui.chen
 */
import { useDispatch } from "react-redux";
import { useGetUserInfo } from "utils";
import { Menu, Dropdown, Avatar, Layout } from "antd";
import { ModuleName, HeaderUserName, CaretDownOutlinedIcon } from "./styled";
import { logout } from "store/reducer/userInfo";

const { Header } = Layout;
export const HeaderContainer = () => {
  const dispatch = useDispatch();

  const { userInfo } = useGetUserInfo();
  return (
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
          <CaretDownOutlinedIcon />
        </p>
      </Dropdown>
    </Header>
  );
};
