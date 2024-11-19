import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../Sidebar/Sidebar.style";
import st from "../../image/ST.svg";
import teacher from "../../image/teacher2.svg";
import setting from "../../image/teacher.svg";
import profile from "../../image/profile.svg";
import logo from "../../image/logo.png";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Wrap>
        <S.Content>
          <S.Head
            onClick={() => {
              const role = localStorage.getItem("role");

              navigate(
                role === "student"
                  ? "/s_main"
                  : role === "teacher"
                  ? "/t_main"
                  : "/login"
              );
            }}
          >
            <img src={logo} alt="logo" />
            <img src={st} alt="name" />
          </S.Head>
          <S.Container>
            <S.Button onClick={() => navigate("/Info")}>
              <img src={teacher} alt="teacher-logo" />
              <S.BtnText>선생님</S.BtnText>
            </S.Button>
            <S.Button onClick={() => navigate("/Profile")}>
              <img src={setting} alt="setting-logo" />
              <S.BtnText>프로필</S.BtnText>
            </S.Button>
          </S.Container>
        </S.Content>
        <S.Bottom>
          <img src={profile} alt="profile" />
          <div>{localStorage.getItem("name")}</div>
        </S.Bottom>
      </S.Wrap>
    </>
  );
};

export default Sidebar;
