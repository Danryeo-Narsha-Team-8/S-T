import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Clock from "../../components/Clock/Clock";
import Card from "../../components/Teachercard/Card";

import button from "../../image/search.svg";
import Style from "./Info.module.css";
import * as S from "../Info/Info.style";

import teacher from "../../firebase/teacher";

import NotFindImg from "../../image/notFind.png";

const Info = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 전체 선생님 리스트
  const [teacherList, setTeacherList] = useState(null);
  // 검색어에 따라 필터링된 리스트
  const [filteredTeacherList, setFilteredTeacherList] = useState(null);

  const [searchInputValue, setSearchInputValue] = useState("");

  const email = localStorage.getItem("email");

  // 선생님 리스트 가져오기
  useEffect(() => {
    const fetchTeacherList = async () => {
      try {
        const TeacherList = await teacher.getTeachers();

        // 데이터 검증 및 기본값 설정
        const validTeachers = TeacherList.filter(
          (teacherItem) => teacherItem.name && teacherItem.email
        ).map((teacherItem) => ({
          ...teacherItem,
          communicationState: teacherItem.communicationState ?? "정보 없음",
          state: teacherItem.state ?? "상태 불명",
          location: teacherItem.location ?? "위치 불명",
        }));

        setTeacherList(validTeachers);
      } catch (err) {
        console.error("선생님 데이터를 가져오는 중 오류 발생:", err);
        setTeacherList([]);
      }
    };

    fetchTeacherList();
  }, [email]);

  // 값이 있는지 확인
  useEffect(() => {
    localStorage.removeItem("Teacher_name");
    if (
      !localStorage.getItem("name") ||
      !localStorage.getItem("email") ||
      localStorage.getItem("role") !== "student"
    ) {
      navigate("/login");
    }
  }, [navigate]);

  // 검색 값에 따라 필터링
  useEffect(() => {
    if (teacherList !== null) {
      const filteredList = teacherList.filter((teacherItem) =>
        teacherItem.name.toLowerCase().includes(searchInputValue.toLowerCase())
      );
      setFilteredTeacherList(filteredList);
    }
  }, [searchInputValue, teacherList]);

  // 로딩 여부 확인
  useEffect(() => {
    if (teacherList !== null) {
      setLoading(false);
    }
  }, [teacherList]);

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중일 때 화면 표시
  }

  return (
    <S.Wrap>
      <Sidebar />
      <S.Container>
        <Clock />
        <S.Input>
          <img src={button} alt="" />
          <input
            type="text"
            placeholder="검색"
            onChange={(event) => setSearchInputValue(event.target.value)}
          />
        </S.Input>
        <S.Teacher>
          {filteredTeacherList && filteredTeacherList.length > 0 ? (
            filteredTeacherList.map((teacherItem, index) => (
              <Card
                key={index}
                name={teacherItem.name}
                state={teacherItem.state}
                communicationState={teacherItem.communicationState}
                location={teacherItem.location}
              />
            ))
          ) : (
            <div className={Style.none_T_div}>
              <img src={NotFindImg} className={Style.NotFindImg}></img>
              <h2>선생님을 찾을 수 없습니다!</h2>
            </div>
          )}
        </S.Teacher>
      </S.Container>
    </S.Wrap>
  );
};

export default Info;
