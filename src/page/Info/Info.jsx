import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Clock from "../../components/Clock/Clock";
import Card from "../../components/Teacher_card/Card";

import button from "../../image/search.svg";
import * as S from "../Info/Info.style";

import teacher from "../../firebase/teacher";

const Info = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataLen, setDataLen] = useState(0);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachers = await teacher.getTeachers();
        setData(teachers);
        setDataLen(teachers.length);
        setLoading(false);
        console.log(data);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  if (loading) {
    return (
      <div>
        <p>로딩중 입니다...</p>
      </div>
    );
  }

  return (
    <S.Wrap>
      <Sidebar />
      <S.Container>
        <Clock />
        <S.Input>
          <img src={button} alt="" />
          <input type="text" placeholder="검색" />
        </S.Input>
        <S.Teacher>
          {dataLen > 0 ? (
            data.map((teacherItem, index) => (
              <Card
                key={index}
                communicationState={teacherItem.communicationState}
                name={teacherItem.name}
                state={teacherItem.state}
                location={teacherItem.location}
              />
            ))
          ) : (
            <div>
              <p>선생님을 찾을 수 없습니다.</p>
            </div>
          )}
        </S.Teacher>
      </S.Container>
    </S.Wrap>
  );
};

export default Info;
