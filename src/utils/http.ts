/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-08 14:59:35
 * @LastEditTime: 2021-03-25 18:35:24
 * @LastEditors: zhanghui.chen
 */

import qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: object;
}

// endpoint
export const http = async (
  api: string,
  { data, ...RequestInitConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Token": window.localStorage.getItem("token") || "",
      "Content-Type": data ? "application/json" : "",
    },
    ...RequestInitConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    api += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiUrl}${api}`, config).then((res) => res.json());
};
