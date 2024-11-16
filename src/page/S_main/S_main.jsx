import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Clock from "../../components/Clock/Clock";
import * as S from "./S_main.style";
import styles from "./S_main.module.css";
import button from "../../image/search.svg";
import TeacherCard from "../../components/S_main/TeacherCard";
import Schedule from "../../components/S_main/Schedule";

import student from "../../firebase/student";
import teacher from "../../firebase/teacher";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [workList, setWorkList] = useState(null);
  const [workListLen, setWorkListLen] = useState(0);

  const [teacherList, setTeacherList] = useState(null);
  const [filteredTeacherList, setFilteredTeacherList] = useState(null);
  const [TeacherListLen, setTeacherListLen] = useState(0);
  const [searchInputValue, setSearchInputValue] = useState("");

  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  // 값이 있는지 확인
  useEffect(() => {
    localStorage.removeItem("Teacher_named");

    if (
      !localStorage.getItem("name") ||
      !localStorage.getItem("email") ||
      localStorage.getItem("role") != "student"
    ) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (teacherList !== null) {
      const filteredList = teacherList.filter((teacherItem) =>
        teacherItem.name.toLowerCase().includes(searchInputValue.toLowerCase())
      );
      setFilteredTeacherList(filteredList);
    }
  }, [searchInputValue, teacherList]);

  useEffect(() => {
    setLoading(true);

    const fetchWorkList = async () => {
      try {
        const worklist = await student.findwork(email);
        setWorkList(worklist);
        setWorkListLen(Object.keys(worklist).length);
      } catch (err) {
        console.log("오류", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchTeacherList = async () => {
      try {
        const TeacherList = await teacher.getTeachers();
        setTeacherList(TeacherList);
        setTeacherListLen(Object.keys(TeacherList).length);
      } catch (err) {
        console.log("오류", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherList();
    fetchWorkList();
  }, [email]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <S.Wrap>
      <Sidebar />
      <S.Container>
        <Clock />
        <S.Schedule>
          <S.Text>
            <span style={{ fontWeight: "bold" }}>
              오늘 {workListLen}개의 일정이 있어요!
            </span>
            <S.Add onClick={() => navigate("/Schedule")}>+</S.Add>
          </S.Text>
          <S.ListBox>
            {workList ? (
              Object.values(workList).map((workItem, index) => (
                <Schedule
                  key={index}
                  Todo={workItem.Todo}
                  TodoTeacher={workItem.TodoTeacher}
                  workEndDate={workItem.workEndDate}
                  workStartDate={workItem.workStartDate}
                />
              ))
            ) : (
              <div></div>
            )}
          </S.ListBox>
        </S.Schedule>
        <S.Content>
          <S.Input>
            <input
              placeholder="검색"
              onChange={(event) => setSearchInputValue(event.target.value)}
            />
            <img src={button} alt="img" />
          </S.Input>
          <S.ListBox2>
            <S.Table>
              <thead>
                <tr>
                  <S.Th>이름</S.Th>
                  <S.Th>연락 가능 여부</S.Th>
                  <S.Th>위치</S.Th>
                  <S.Th>선생님 일정 추가</S.Th>
                </tr>
              </thead>
              {filteredTeacherList && filteredTeacherList.length > 0 ? (
                filteredTeacherList.map((teacherItem, index) => (
                  <TeacherCard
                    key={index}
                    name={teacherItem.name}
                    communicationState={teacherItem.communicationState}
                    location={teacherItem.location}
                  />
                ))
              ) : (
                <tr className={styles.none_T_tr}>
                  <td colSpan="4">선생님을 찾을 수 없습니다.</td>
                </tr>
              )}
            </S.Table>
          </S.ListBox2>
        </S.Content>
      </S.Container>
    </S.Wrap>
  );
};

export default Main;
