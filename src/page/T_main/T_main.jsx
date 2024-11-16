import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./T_main.css";

import Sidebar from "../../components/Sidebar_T_main/Sidebar";
import Clock from "../../components/Clock/Clock";

import teacher from "../../firebase/teacher";

const T_main = () => {
  const [location, setLocation] = useState(""); // 장소
  const [situation, setSituation] = useState(""); // 상태
  const [inputValue, setInputValue] = useState("");
  const [isAvailable, setIsAvailable] = useState(true); // 연락여부

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("Teacher_named");

    if (
      !localStorage.getItem("name") ||
      !localStorage.getItem("email") ||
      localStorage.getItem("role") != "teacher"
    ) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    //연락
    const fetchCommunicationState = async () => {
      await teacher.getTeacherCommunicationState(localStorage.getItem("email"));
      const State = localStorage.getItem("CommunicationState");

      if (State !== null) {
        setIsAvailable(State === "true");
      } else {
        setIsAvailable(false);
      }
      localStorage.removeItem("CommunicationState");
    };

    //장소
    const fetchLocationState = async () => {
      await teacher.getTeacherLocationState(localStorage.getItem("email"));
      const State = localStorage.getItem("Location");

      if (State !== null) {
        setLocation(State);
      } else {
        setLocation("불러올수 없음");
      }
      localStorage.removeItem("Location");
    };

    //상태
    const fetchState = async () => {
      await teacher.getTeacherState(localStorage.getItem("email"));
      const State = localStorage.getItem("State");

      if (State !== null) {
        setSituation(State);
      } else {
        setSituation("불러올수 없음");
      }
      localStorage.removeItem("State");
    };

    fetchCommunicationState();
    fetchLocationState();
    fetchState();
  }, []);

  const handleAvailabilityChange = (email) => {
    console.log(situation);
    setIsAvailable(!isAvailable);
    teacher.ChangeTeacherCommunicationState(email);
  };

  const handleLocationChange = () => {
    const email = localStorage.getItem("email");
    setLocation(inputValue);
    teacher.ChangeTeacherLocationState(email, inputValue);
    setInputValue("");
  };

  const handleSituationChange = (newSituation) => {
    const email = localStorage.getItem("email");
    setSituation(newSituation);
    teacher.ChangeTeacherstate(email, newSituation);
  };

  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <div className="time-box">
          <Clock />
        </div>
        <div className="main-content">
          <div className="left-box">
            <div className="availability">
              <p className="text">현재 연락 여부</p>
              <p
                className={`availability_color ${
                  isAvailable ? "available" : ""
                }`}
              >
                {isAvailable ? "가능" : "불가능"}
              </p>
            </div>
            <button
              className={`change ${isAvailable ? "change-on" : ""}`}
              onClick={() =>
                handleAvailabilityChange(localStorage.getItem("email"))
              }
            >
              <p className="change_text">변경</p>
            </button>
          </div>
          <div className="right-box">
            <div className="location-box">
              <div className="location-ui">
                <p className="current-location-title">현재 위치</p>
                <p className="current-location">{location}</p>
              </div>
              <div className="location-change">
                <input
                  type="text"
                  className="location_input"
                  placeholder="표시할 장소를 입력하여 주세요"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="apply" onClick={handleLocationChange}>
                  변경
                </button>
              </div>
            </div>
            <div className="situation">
              <div className="situation-ui">
                <p className="current-situation-title">현재 상태</p>
                <p className="current-situation">{situation}</p>
              </div>
              <div className="status-buttons">
                {[
                  "회의 중",
                  "수업 중",
                  "휴식 중",
                  "외출 중",
                  "퇴근",
                  "기타",
                ].map((status) => (
                  <button
                    key={status}
                    className={`status-button ${
                      situation === status ? "active" : ""
                    }`}
                    onClick={() => handleSituationChange(status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T_main;
