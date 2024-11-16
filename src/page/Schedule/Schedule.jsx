import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

import * as S from "../Schedule/Schedule.style";
import icon from "../../image/schedule.svg";

import student from "../../firebase/student";

const Schedule = () => {
  const Navigat = useNavigate();

  const email = localStorage.getItem("email");

  //선생님
  const [teacher, setTeacher] = useState(localStorage.getItem("Teacher_name"));

  //할일
  const [work, setWork] = useState("");

  //시작
  const [startDay_y, setStartDay_y] = useState("");
  const [startDay_m, setStartDay_m] = useState("");
  const [startDay_d, setStartDay_d] = useState("");

  // 끝
  const [endDay_y, setEndDay_y] = useState("");
  const [endDay_m, setEndDay_m] = useState("");
  const [endDay_d, setEndDay_d] = useState("");

  //일 추가
  function addWork() {
    console.log(email);
    const startDate = `${startDay_y}/${startDay_m}/${startDay_d}`;
    const endDate = `${endDay_y}/${endDay_m}/${endDay_d}`;
    console.log(email, work, teacher, startDate, endDate);
    student.creatework(email, work, teacher, startDate, endDate);

    Navigat("/s_main");
  }

  return (
    <S.Wrap>
      <Sidebar />
      <S.Container>
        <S.Head>
          <img src={icon} alt="icon" />
          <h1>일정추가</h1>
          <S.Bar></S.Bar>
        </S.Head>
        <S.Content>
          <S.Margin>
            <h2>선생님</h2>
            <S.InputBg>
              <S.InputText
                type="text"
                value={teacher}
                onChange={(event) => setTeacher(event.target.value)}
              />
            </S.InputBg>
          </S.Margin>
          <S.Margin>
            <h2>할일</h2>
            <S.InputBg>
              <S.InputText
                type="text"
                onChange={(event) => setWork(event.target.value)}
              />
            </S.InputBg>
          </S.Margin>
          <S.Margin>
            <h2>시작날짜(년, 월, 일)</h2>
            <S.InputBg>
              <S.InputDate
                type="text"
                onChange={(event) => setStartDay_y(event.target.value)}
              />
              <S.InputDate
                type="text"
                onChange={(event) => setStartDay_m(event.target.value)}
              />
              <S.InputDate
                type="text"
                onChange={(event) => setStartDay_d(event.target.value)}
              />
            </S.InputBg>
          </S.Margin>
          <S.Margin>
            <h2>종료날짜(년, 월, 일)</h2>
            <S.InputBg>
              <S.InputDate
                type="text"
                onChange={(event) => setEndDay_y(event.target.value)}
              />
              <S.InputDate
                type="text"
                onChange={(event) => setEndDay_m(event.target.value)}
              />
              <S.InputDate
                type="text"
                onChange={(event) => setEndDay_d(event.target.value)}
              />
            </S.InputBg>
          </S.Margin>
        </S.Content>
        <S.Buttons>
          <S.Button onClick={() => Navigat("/s_main")}>취소</S.Button>
          <S.Button onClick={() => addWork()}>추가</S.Button>
        </S.Buttons>
      </S.Container>
    </S.Wrap>
  );
};

export default Schedule;
