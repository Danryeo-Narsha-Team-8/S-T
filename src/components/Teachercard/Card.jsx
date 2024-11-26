import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../Teachercard/Card.style";

const Card = ({ communicationState, name, state, location }) => {
  const navigate = useNavigate();

  function addSchedule(event) {
    localStorage.setItem("Teacher_name", name);
    navigate("/Schedule");
  }

  return (
    <S.Box>
      <S.Name>{name} 선생님</S.Name>
      <S.State_list>
        <S.Loc>
          위치
          <span>{location}</span>
        </S.Loc>
        <S.State>
          상태
          <span>{state}</span>
        </S.State>
        <S.Com>
          연락여부
          <span>{communicationState ? "가능" : "불가능"}</span>
        </S.Com>
      </S.State_list>
      <S.Button onClick={(event, name) => addSchedule(event, name)}>
        일정추가
      </S.Button>
    </S.Box>
  );
};

export default Card;
