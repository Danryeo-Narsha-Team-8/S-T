import styles from "./Signup.module.css";
import React, { useState } from "react";
import Logo from "../../image/logo.jpg";
import { useNavigate } from "react-router-dom";

import login from "../../firebase/login";

const Signup = () => {
  const navigate = useNavigate();

  const [inputPassword, setInputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");

  async function trySignup(email, password, name) {
    const signUpState = await login.signUp(email, password, name);

    if (signUpState) {
      localStorage.setItem("accessKey", "sjghRQEETGWkfadvdljpshgkfnewEFQREGW");
      navigate("/main");
    } else {
      localStorage.removeItem("accessKey");
    }
  }

  const loginNavigate = () => {
    navigate("/login");
  };

  const changeEmailVAlue = (event) => {
    setInputEmail(event.target.value);
  };

  const changePasswordVAlue = (event) => {
    setInputPassword(event.target.value);
  };

  const changeNameValue = (event) => {
    setInputName(event.target.value);
  };

  return (
    <div>
      <div className={styles.login}>
        <div className={styles.imgBox}></div>

        <div className={styles.loginBox}>
          <img src={Logo} alt="이미지를 불러오지 못하였습니다." />

          <div className={styles.inputBox}>
            <span>e-mail</span>
            <input type="text" onChange={changeEmailVAlue}></input>
          </div>

          <div className={styles.inputBox}>
            <span>PW</span>
            <input type="password" onChange={changePasswordVAlue}></input>
          </div>

          <div className={styles.inputBox}>
            <span>이름</span>
            <input type="text" onChange={changeNameValue}></input>
          </div>

          <div className={styles.loginButtonBox}>
            <button
              onClick={() => trySignup(inputEmail, inputPassword, inputName)}
            >
              회원가입
            </button>
            <div className={styles.linkSignup}>
              <span>
                계정이 있다면?{" "}
                <span
                  style={{ color: "#5C12F9" }}
                  onClick={loginNavigate}
                  className={styles.linkLogin}
                >
                  로그인
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
