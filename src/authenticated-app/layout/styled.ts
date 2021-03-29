/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-29 12:28:08
 * @LastEditTime: 2021-03-29 18:29:05
 * @LastEditors: zhanghui.chen
 */

import styled from "@emotion/styled";
import siderBackground from "assets/images/sider-background.png";
import itemFocus from "assets/images/item-focus.png";

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
  }
`;

export const LogoContainer = styled.div`
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    margin-top: 1rem;
    font-size: 16px;
    /* border: 1px solid red; */
    height: 2.6rem;
    overflow: hidden;
  }
`;
