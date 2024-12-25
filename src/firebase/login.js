import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import student from "./student.js";
import teacher from "./teacher.js";

import { auth } from "../config.js";

//회원가입
async function signUp(email, password, name) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      student.createStudent(email, name, {});
      alert("회원가입에 성공하였습니다.");
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("회원가입에 실패하였습니다.");
      console.log(errorCode, errorMessage);
      return false;
    });
}

//로그인
async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("로그인에 성공하였습니다.");
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("로그인에 실패하였습니다.");
      console.log(errorCode, errorMessage);
      return false;
    });
}

//역할 조회
async function setData(email) {
  await teacher.findTeacher(email);
  if (!localStorage.getItem("name")) {
    await student.findstudent(email);
  } else {
    await teacher.findTeacher(email);
  }
}

export default { signUp, login, setData };
