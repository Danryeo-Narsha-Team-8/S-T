import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Clock from "../../components/Clock/Clock";
import * as S from "./Smain.style";
import style from "./Smain.module.css";
import button from "../../image/search.svg";
import TeacherCard from "../../components/Smain/TeacherCard";
import Schedule from "../../components/Smain/Schedule";

import student from "../../firebase/student";
import teacher from "../../firebase/teacher";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [workList, setWorkList] = useState(null);
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
      localStorage.getItem("role") !== "student"
    ) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchAndFilterTeachers = async () => {
      try {
        const teachers = await teacher.getTeachers();

        // 데이터 검증 및 기본값 설정
        const validTeachers = teachers
          .filter((teacherItem) => teacherItem.name && teacherItem.email) // name과 email이 있는 항목만 포함
          .map((teacherItem) => ({
            ...teacherItem,
            communicationState: teacherItem.communicationState ?? "정보 없음",
            location: teacherItem.location ?? "위치 불명",
            state: teacherItem.state ?? "상태 불명",
          }));

        setTeacherList(validTeachers);

        // 필터링 적용
        const filteredList = validTeachers.filter((teacherItem) =>
          teacherItem.name
            .toLowerCase()
            .includes((searchInputValue || "").toLowerCase())
        );
        setFilteredTeacherList(filteredList);
        setTeacherListLen(validTeachers.length);
      } catch (error) {
        console.error("선생님 데이터를 가져오는 중 오류 발생:", error);
        setTeacherList(null);
        setFilteredTeacherList([]);
      }
    };

    fetchAndFilterTeachers();
  }, [searchInputValue]);

  // 일정 데이터 가져오기
  useEffect(() => {
    setLoading(true);

    const fetchWorkList = async () => {
      try {
        const worklist = await student.findwork(email);
        setWorkList(worklist);
      } catch (err) {
        console.log("오류", err);
      }
    };

    fetchWorkList();
    localStorage.removeItem("Teacher_name");
  }, [email]);

  // workList와 teacherList가 모두 로드되면 loading 상태 변경
  useEffect(() => {
    if (workList !== null && teacherList !== null) {
      setLoading(false);
    }
  }, [workList, teacherList]);

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중일 때 화면 표시
  }

  return (
    <S.Wrap>
      <Sidebar />
      <S.Container>
        <Clock />
        <S.Schedule>
          <S.Text>
            <span style={{ fontWeight: "bold" }}>
              오늘 {Object.values(workList).length}개의 일정이 있어요!
            </span>
            <S.Add onClick={() => navigate("/Schedule")}>+</S.Add>
          </S.Text>
          <S.ListBox>
            {workList && Object.keys(workList).length > 0 ? (
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
              <div>일정이 없습니다.</div>
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
                filteredTeacherList.map((teacherItem, index) =>
                  teacherItem ? (
                    <TeacherCard
                      key={index}
                      name={teacherItem.name || "이름 없음"}
                      communicationState={
                        teacherItem.communicationState || "확인 불가"
                      }
                      location={teacherItem.location || "위치 불명"}
                    />
                  ) : null
                )
              ) : (
                <tr className={style.none_T_tr}>
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
