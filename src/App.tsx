/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-23 12:21:11
 * @LastEditTime: 2021-04-01 19:31:14
 * @LastEditors: zhanghui.chen
 */

import "./App.css";
import { UnauthenticatedApp } from "unauthenticated-app";
import { AuthenticatedApp } from "authenticated-app/layout";
import { useSelector, useDispatch } from "react-redux";
import { US } from "unauthenticated-app/types";
import { useEffect } from "react";
import { getJurisdiction } from "store/user/actions";
import { getUserLoginStatus } from "utils";

function App() {
  const dispatch = useDispatch();
  const storeUserLoginStatus = useSelector<
    US,
    US["userInfoState"]["loginStatus"]
  >((state) => state.userInfoState.loginStatus);

  useEffect(() => {
    dispatch(getJurisdiction);
  }, [dispatch]);

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
