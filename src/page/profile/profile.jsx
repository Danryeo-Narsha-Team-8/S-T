import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import icon from "../../image/profile.svg";
import "./profile.css";

const ProfilePage = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile-content">
        <div className="profile-header">
          <img src={icon} alt="icon" className="prof-img" />
          <h1>프로필</h1>
        </div>
        <hr className="profile-divider" />
        <div className="profile-info">
          <div className="profile-field">
            <span className="label">아이디</span>
            <span className="label">Email</span>
          </div>
          <div className="profile-field">
            <span className="value">{name}</span>
            <span className="value">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
