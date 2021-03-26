/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-23 16:05:35
 * @LastEditTime: 2021-03-25 18:47:27
 * @LastEditors: zhanghui.chen
 */

import styled from "@emotion/styled";

// 登录container
export const LoginContainer = styled.div`
  position: relative;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 50rem;
  height: 63rem;
`;

export const LogoContainer = styled.div`
  margin-top: -7rem;
  > img {
    width: 4rem;
    margin: 0 auto;
    display: block;
  }
  > h4 {
    font-size: 2.4rem;
    font-weight: normal;
    color: #fff;
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }
`;

// 登录表单
export const LoginCard = styled.div`
  width: 100%;
  height: 54rem;
  position: absolute;
  bottom: 0;
  border: 1px solid red;
  background: #222222;
  box-shadow: 0px 0px 18px 4px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border: 2px solid rgba(74, 74, 74, 0.5);

  > h2 {
    color: #fff;
    font-weight: normal;
    font-size: 2.4rem;
    padding: 4rem;
    text-align: center;
  }
  > p {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    color: rgba(177, 177, 177, 0.8);
  }
`;

export const FormContainer = styled.div`
  margin: 0 6.6rem;
`;

export const BodyBackground = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
