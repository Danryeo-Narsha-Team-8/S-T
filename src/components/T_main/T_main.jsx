import React, { useState } from "react";
import "./T_main.css";
import Sidebar from "../Sidebar";

const T_main = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [location, setLocation] = useState("미술실");
  const [situation, setSituation] = useState("회의 중");
  const [inputValue, setInputValue] = useState("");

  const handleAvailabilityChange = () => {
    setIsAvailable(!isAvailable);
  };

  const handleLocationChange = () => {
    if (inputValue.trim()) {
      setLocation(inputValue);
      setInputValue("");
    }
  };

  const handleSituationChange = (newSituation) => {
    setSituation(newSituation);
  };

  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <div className="time-box">
          <h1 className="time">19:36</h1>
          <p className="date">2024/9/3</p>
        </div>
        <div className="main-content">
          <div className="left-box">
            <div className="availability">
              <p className="text">현재 연락 여부</p>
              <p className={`availability_color ${isAvailable ? "available" : ""}`}>
                {isAvailable ? "변경" : "불가능"}
              </p>
            </div>
            <button
              className={`change ${isAvailable ? "change-on" : ""}`}
              onClick={handleAvailabilityChange}
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
                {["회의 중", "수업 중", "휴식 중", "외출 중", "퇴근", "기타"].map((status) => (
                  <button
                    key={status}
                    className={`status-button ${situation === status ? "active" : ""}`}
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
