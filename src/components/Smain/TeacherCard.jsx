import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../page/Smain/Smain.style";
import styles from "./TeacherCard.module.css";

function TeacherCard({ name, communicationState, location }) {
  const navigate = useNavigate();

  function addSchedule(event) {
    localStorage.setItem("Teacher_name", name);
    navigate("/Schedule");
  }

  return (
    <tbody>
      <tr className="tr">
        <S.Td>{name}</S.Td>
        <S.Td>{communicationState ? "가능" : "불가능"}</S.Td>
        <S.Td>{location}</S.Td>
        <S.Td
          onClick={(event, name) => addSchedule(event, name)}
          className={styles.clickable}
        >
          <p>일정추가</p>
        </S.Td>
      </tr>
    </tbody>
  );
}

export default TeacherCard;
