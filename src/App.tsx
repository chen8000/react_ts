/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-23 12:21:11
 * @LastEditTime: 2021-04-09 17:54:33
 * @LastEditors: zhanghui.chen
 */

import "./App.css";
import { UnauthenticatedApp } from "unauthenticated-app";
import { AuthenticatedApp } from "authenticated-app/layout";
import { useSelector, useDispatch } from "react-redux";
import { US } from "unauthenticated-app/types";
import { useEffect, useCallback } from "react";
import { getJurisdiction } from "store/user/actions";
import { getUserLoginStatus } from "utils";
import { useNavigate, useLocation } from "react-router";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const storeUserLoginStatus = useSelector<
    US,
    US["userInfoState"]["loginStatus"]
  >((state) => state.userInfoState.loginStatus);

  // 请求用户对应的权限列表，判断是否请求成功，否 -> 跳转到登录
  const getUserJurisdictionRes = useCallback(async () => {
    const JurisdictionRes = await dispatch(getJurisdiction);

    if (!JurisdictionRes) {
      navigate("/");
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    location.pathname !== "/" && getUserJurisdictionRes();
  }, [getUserJurisdictionRes, location]);

  return (
    <div className="App">
      {storeUserLoginStatus || getUserLoginStatus() ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )}
    </div>
  );
}

export default App;
