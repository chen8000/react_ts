/*
 * @Author: zhanghui.chen
 * @Date: 2021-03-23 12:21:11
 * @LastEditTime: 2021-03-23 17:54:33
 * @LastEditors: zhanghui.chen
 */

import background from "assets/images/body-background.png";
import styled from "@emotion/styled";
import { LoginComponent } from "views/login/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoginComponent />
      <BodyBackground src={background} alt="" />
    </div>
  );
}

export default App;

const BodyBackground = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
