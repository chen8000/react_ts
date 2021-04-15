/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-23 14:12:53
 * @LastEditTime: 2021-04-15 12:12:20
 * @LastEditors: zhanghui.chen
 */
const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@body-background": "#252525", // body背景色
              "@primary-color": "rgba(4, 181, 109, 1)",
              "@text-color": "#fff",
              "@menu-icon-size": "20px",
              // @primary-color: #1890ff, // 全局主色
              // @link-color: #1890ff, // 链接色
              // @success-color: #52c41a, // 成功色
              // @warning-color: #faad14, // 警告色
              // @error-color: #f5222d, // 错误色
              // "@font-size-base": "14px", // 主字号
              // @heading-color: rgba(0, 0, 0, 0.85), // 标题色
              // "@text-color-secondary": "rgba(255, 255, 255, 0.45)", // 次文本色
              // @disabled-color: rgba(0, 0, 0, 0.25), // 失效色
              // @border-radius-base: 2px, // 组件/浮层圆角
              // @border-color-base: #d9d9d9, // 边框色
              // @box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
              //   0 9px 28px 8px rgba(0, 0, 0, 0.05), // 浮层阴影
              "@input-placeholder-color": "rgba(120, 120, 120, 1)",
              "@component-background": "rgba(50, 50, 50, 1)",
              "@input-color": "#fff",
              "@item-hover-bg": "rgba(0,0,0,0)",
              "@label-color": "rgba(176, 176, 176, 1)",
              "@input-border-color": "rgba(0,0,0,0)",
              "@input-hover-border-color": "rgba(0,0,0,.2)",
              "@layout-body-background": "#252525",
              "@layout-header-background": "#252525",
              "@layout-sider-background": "rgba(28, 28, 28, 1)",
              "@menu-dark-bg": "rgba(28, 28, 28, 1)",
              "@menu-collapsed-width": "40px",
              "@layout-header-padding": "0 30px",
              "@avatar-bg": "rgba(90, 89, 89, 1)",
              "@menu-dark-inline-submenu-bg": "rgba(0,0,0,0)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
