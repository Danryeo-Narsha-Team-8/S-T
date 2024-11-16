import React from "react";

import { Route, Routes } from "react-router-dom";

import Signup from "./page/signup/Signup";
import Login from "./page/login/Login";

//학생 매인
import S_Main from "./page/S_main/S_main";

//선생님 메인
import T_Main from "../src/page/T_main/T_main";

// 선생님 보기
import Info from "../src/page/Info/Info";

//일정추가
import Schedule from "../src/page/Schedule/Schedule";

//프로필
import Profile from "../src/page/profile/profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/s_main" element={<S_Main />} />
      <Route path="/t_main" element={<T_Main />} />
      <Route path="/info" element={<Info />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
