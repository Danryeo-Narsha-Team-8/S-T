import styles from "./Login.module.css";
import React, { useState } from "react";
import Logo from "../../image/logo.jpg";
import { useNavigate } from "react-router-dom";

import login from "../../firebase/login";
import teacher from "../../firebase/teacher";

const Login = () => {
  const navigate = useNavigate();

  const [inputPassword, setInputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  async function tryLogin(email, password) {
    const loginState = await login.login(email, password);

    if (loginState) {
      await login.setData(email);

      if (localStorage.getItem("role") === "teacher") {
        navigate("/t_main");
      } else {
        navigate("/s_main");
      }
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.removeItem("role");
    }
  }

  const signupNavigate = () => {
    navigate("/signup");
  };

  const changeEmailVAlue = (event) => {
    setInputEmail(event.target.value);
  };

  const changePasswordVAlue = (event) => {
    setInputPassword(event.target.value);
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

          <div className={styles.loginButtonBox}>
            <button onClick={() => tryLogin(inputEmail, inputPassword)}>
              로그인
            </button>
            <div className={styles.linkSignup}>
              <span>
                계정이 없다면?{" "}
                <span style={{ color: "#5C12F9" }} onClick={signupNavigate}>
                  회원가입
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
