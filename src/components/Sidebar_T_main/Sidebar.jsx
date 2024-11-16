import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../Sidebar/Sidebar.style";
import logo from "../../image/logo.svg";
import st from "../../image/S-T.svg";
import teacher from "../../image/teacher2.svg";
import setting from "../../image/setting.svg";
import profile from "../../image/profile.svg";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Wrap>
        <S.Content>
          <S.Head onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
            <img src={st} alt="name" />
          </S.Head>
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
