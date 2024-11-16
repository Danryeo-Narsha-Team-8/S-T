import React from "react";
import * as S from "../../page/S_main/S_main.style";

function Schedule({ TodoTeacher, Todo, workEndDate, workStartDate }) {
  return (
    <S.SList>
      <S.Name>{TodoTeacher}</S.Name>
      <S.List_content>{Todo}</S.List_content>
      <div>{`${workStartDate} ~ ${workEndDate}`}</div>
    </S.SList>
  );
}

export default Schedule;
