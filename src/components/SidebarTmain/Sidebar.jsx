import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../Sidebar/Sidebar.style";
import logo from "../../image/logo.png";
import st from "../../image/ST.svg";
import profile from "../../image/profile.svg";

import teacher from "../../image/teacher2.svg";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Wrap>
        <S.Content>
          <S.Head onClick={() => navigate("/t_main")}>
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
