/*
 * @Author: zhanghui.chen
 * @Date: 2021-04-14 12:25:17
 * @LastEditTime: 2021-04-15 15:19:48
 * @LastEditors: zhanghui.chen
 */

import { ChangePasswodPropsType } from "./types";
import { Drawer, Form, Input, Button } from "antd";
import styled from "@emotion/styled";
import { primaryColor, cancelButtonBg, cancelButtonHoverBg } from "theme";

export const ChangePasswod = ({
  visible,
  onCloseChangePassword,
}: ChangePasswodPropsType) => {
  const [form] = Form.useForm();

  return (
    <Drawer
      title="修改密码"
      closable={true}
      onClose={onCloseChangePassword}
      visible={visible}
      width={310}
    >
      <CustomForm>
        <Form form={form} layout="vertical" initialValues={{ remember: true }}>
          <div>
            <Form.Item
              label="原始密码"
              rules={[{ required: true }]}
              name="oldPassword"
            >
              <CustomInputBordered>
                <Input placeholder="请输入原始密码" />
              </CustomInputBordered>
            </Form.Item>
            <Form.Item
              label="新密码"
              rules={[{ required: true }]}
              name="newPassword"
            >
              <CustomInputBordered>
                <Input placeholder="请输入新密码" />
              </CustomInputBordered>
            </Form.Item>
            <Form.Item
              label="重复新密码"
              rules={[{ required: true }]}
              name="repeatNewPassword"
            >
              <CustomInputBordered>
                <Input placeholder="请输入重复新密码" />
              </CustomInputBordered>
            </Form.Item>
          </div>
          <CustomFormItem>
            <Button type={"primary"}>确定</Button>
            <CancelButton>取消</CancelButton>
          </CustomFormItem>
        </Form>
      </CustomForm>
    </Drawer>
  );
};

// form样式
export const CustomForm = styled.div`
  height: 100%;
  .ant-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

// 带边框的input
export const CustomInputBordered = styled.div`
  input {
    border: 1px solid #4a4a4a;
    transition: all 0.3s ease;

    &:hover {
      border-color: ${primaryColor};
    }
  }
`;

// 取消按钮样式
export const CancelButton = styled(Button)`
  background: ${cancelButtonBg};
  border-color: ${cancelButtonBg};
  &:hover {
    background: ${cancelButtonHoverBg};
    border-color: ${cancelButtonBg};
    color: #fff;
  }
`;

// item
export const CustomFormItem = styled(Form.Item)`
  button {
    width: 12rem;
  }
  button:last-child {
    float: right;
  }
`;
