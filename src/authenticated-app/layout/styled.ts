/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-29 12:28:08
 * @LastEditTime: 2021-04-15 14:55:02
 * @LastEditors: zhanghui.chen
 */

import styled from "@emotion/styled";
import siderBackground from "assets/images/sider-background.png";
import itemFocus from "assets/images/item-focus.png";
import { primaryColor, bodyBackground } from "theme";
import { CaretDownOutlined } from "@ant-design/icons";

// LayoutContainer
export const LayoutContainer = styled.div`
  .ant-layout.ant-layout-has-sider {
    height: 100vh;
    .ant-layout-sider {
      padding: 0 30px;
      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 22rem;
        background: url(${siderBackground}) no-repeat;
      }
    }
    .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
      .ant-menu-item-selected {
      background: url(${itemFocus}) no-repeat;
      border-radius: 0.2rem;
    }
    .ant-layout-sider-collapsed {
      width: 10rem !important;
      flex: 0 0 10rem !important;
      max-width: 10rem !important;
      min-width: 10rem !important;
    }
    .ant-layout-content {
      margin: 20px;
      padding: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .ant-dropdown-trigger {
      display: flex;
      align-items: center;
      height: 30px;
      margin-bottom: 0;
      cursor: pointer;
    }

    /* 二级菜单 */
    .ant-menu-submenu .ant-menu-item-selected {
      background: none !important;
      color: ${primaryColor};
    }
    .ant-menu-submenu .ant-menu-item-selected .ant-menu-item-icon + span {
      color: ${primaryColor};
    }

    .ant-menu-submenu-open {
      color: ${primaryColor};
    }

    .ant-menu-dark .ant-menu-sub .ant-menu-item-selected > span > a {
      color: ${primaryColor};
    }
  }
`;

// logo
export const LogoContainer = styled.div`
  height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    margin-top: 1rem;
    font-size: 16px;
    height: 2.6rem;
    overflow: hidden;
    color: #fff;
  }
`;

// outlined 左侧toggle
export const OutlinedContainer = styled.div`
  position: absolute;
  width: 2.4rem;
  height: 3.2rem;
  right: 0;
  top: 8.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${primaryColor};
  background: ${bodyBackground};
  border-radius: 0.4rem 0 0 0.4rem;
  font-size: 1.3rem;
`;

// 模块名称
export const ModuleName = styled.div`
  font-size: 1.6rem;
  color: ${primaryColor};
`;

// header用户名
export const HeaderUserName = styled.span`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CaretDownOutlinedIcon = styled(CaretDownOutlined)`
  color: rgba(165, 165, 165, 1);
  margin-left: 0.5rem;
`;

// submenu icon
export const SubMenuIconActive = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 1px solid ${primaryColor};
  min-width: 0.8rem !important;
  background: ${primaryColor};
`;
export const SubMenuIcon = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 1px solid;
  min-width: 0.8rem !important;
`;
