/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-08 14:59:35
 * @LastEditTime: 2021-04-20 19:15:39
 * @LastEditors: zhanghui.chen
 */

import qs from "qs";
import _ from "lodash";
const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  data?: object;
  token?: string;
}

// endpoint
export const http = async (
  api: string,
  { data, ...RequestInitConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: _.pickBy({
      username: window.localStorage.getItem("username") || "",
      token: window.localStorage.getItem("token") || "",
      "Content-Type": data ? "application/json" : "",
    }),
    ...RequestInitConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    api += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiUrl}${api}`, config).then((res) => res.json());
};
