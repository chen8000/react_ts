/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-26 15:41:20
 * @LastEditTime: 2021-03-31 19:35:59
 * @LastEditors: zhanghui.chen
 */
export interface LayoutPropsType {
  children: JSX.Element;
}
export interface CollapsedType {
  collapsed: boolean;
  setCollapsed: Function;
}

// 修改密码props
export interface ChangePasswodPropsType {
  visible: boolean;
  onCloseChangePassword: () => void;
}
