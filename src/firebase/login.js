import { initializeApp } from "firebase/app";
import firebaseConfig from "../config.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

import { getDatabase, ref, onDisconnect } from "firebase/database";

import student from "./student.js";
import teacher from "./teacher.js";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

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
    console.log("학생 이메일 검색함");
    await student.findstudent(email);
  }
}

export default { signUp, login, setData };
