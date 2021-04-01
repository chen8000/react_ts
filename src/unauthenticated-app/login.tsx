/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-23 15:52:48
 * @LastEditTime: 2021-04-01 18:41:00
 * @LastEditors: zhanghui.chen
 */

import { Form, Input, Button } from "antd";
import {
  LoginCard,
  FormContainer,
  LoginContainer,
  LogoContainer,
  BodyBackground,
} from "./styled";
import Logo from "assets/images/logo.png";
import { useDispatch } from "react-redux";
import { login } from "store/user/actions";
import { UserLogin } from "./types";
import background from "assets/images/body-background.png";

export const LoginComponent = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: UserLogin) => {
    // dispatch(login(values));
    dispatch(login({ username: "admin", password: "123.com" }));
    // setUserLoginStatus(true);
  };
  return (
    <>
      <LoginContainer>
        {/* logo */}
        <LogoContainer>
          <img src={Logo} alt="" />
          <h4>反欺诈人工审核系统</h4>
        </LogoContainer>
        {/* 登录表单 */}
        <LoginCard>
          <h2>登录</h2>
          <FormContainer>
            <Form layout={"vertical"} onFinish={handleSubmit}>
              <Form.Item label="账号" name={"username"}>
                <Input
                  size={"large"}
                  type="text"
                  placeholder="请输入账号"
                  id={"username"}
                />
              </Form.Item>
              <Form.Item label="密码" name={"password"}>
                <Input
                  size={"large"}
                  type="password"
                  placeholder="请输入密码"
                  id={"password"}
                />
              </Form.Item>
              <Form.Item style={{ marginTop: "70px" }}>
                <Button
                  block={true}
                  htmlType={"submit"}
                  type={"primary"}
                  size={"large"}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </FormContainer>
          <p>杭州芸品绿信息科技有限公司 V2.0.0</p>
        </LoginCard>
      </LoginContainer>
      <BodyBackground src={background} alt="" />
    </>
  );
};
