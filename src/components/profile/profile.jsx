import React from "react";
import Sidebar from "../Sidebar"; // Sidebar 컴포넌트 경로에 맞게 수정해주세요
import icon from '../../asset/image/profile.svg'
import "./profile.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile-content">
        <div className="profile-header">
        <img src={icon} alt="icon" className="prof-img"/>
          <h1>프로필</h1>
        </div>
        <hr className="profile-divider" />
        <div className="profile-info">
          <div className="profile-field">
            <span className="label">아이디</span>
            <span className="label">Email</span>
          </div>
          <div className="profile-field">
            <span className="value">랄슨즈 (학생)</span>
            <span className="value">kmjons01@gmail.com</span>
          </div>
        </div>
        <button className="logout-button">로그아웃</button>
      </div>
    </div>
  );
};

export default ProfilePage;
