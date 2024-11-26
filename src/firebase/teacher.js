import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore/lite";

import { getDatabase, ref, onDisconnect } from "firebase/database";

// Firebase 프로젝트 설정
const firebaseConfig = {
  apiKey: "AIzaSyD0W2E2lihwEvI6-4utdbCvVrflmQJC6-E",
  authDomain: "test001-a3974.firebaseapp.com",
  projectId: "test001-a3974",
  storageBucket: "test001-a3974.appspot.com",
  messagingSenderId: "795659655623",
  appId: "1:795659655623:web:d4d0358aca3998da8521e2",
  measurementId: "G-MMSS39XDVS",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 초기화
const db = getFirestore(app);

// 인증 초기화
const auth = getAuth(app);

//파이어베이스 변수
const teacherCol = collection(db, "teacher");
const teacherSnapshot = await getDocs(teacherCol);
const teacherList = teacherSnapshot.docs.map((doc) => doc.data());
const teacherListLen = teacherList.length;

// Firestore에서 선생 목록 가져오기
async function getTeachers() {
  return teacherList;
}

// Firestore에서 특정 선생(글자가 들어가 있는)만 가져오기
async function filterTeacher(text) {
  for (var number = 0; number < teacherListLen; number++) {
    if (teacherList[number].name.includes(text)) {
      console.log(teacherList[number]);
    }
  }
}

// Firestore에서 특정 선생(특정 이메일인것)에 이름 저장
async function findTeacher(email) {
  for (var number = 0; number < teacherListLen; number++) {
    if (teacherList[number].email === email) {
      localStorage.setItem("name", teacherList[number].name);
      localStorage.setItem("email", teacherList[number].email);
      localStorage.setItem("role", "teacher");
    }
  }
}

// Firestore에서 선생 목록 추가하기 teacher 아레에 추가
async function pushTeacher(
  teacherName,
  communicationState,
  location,
  state,
  teacherEmail
) {
  const document_name = teacherEmail;
  const teacheRef = doc(db, "teacher", document_name);

  try {
    await setDoc(teacheRef, {
      email: teacherEmail,
      name: teacherName,
      communicationState: communicationState,
      location: location,
      state: state,
    });
  } catch (error) {
    console.error("선생님을 추가하는데에 실패하였습니다.", error);
  }
}

// 선생님 연락여부 가져오기
async function getTeacherCommunicationState(email) {
  const document_name = email;
  const teacheRef = doc(db, "teacher", document_name);
  const teacherDoc = await getDoc(teacheRef);
  const data = teacherDoc.data();
  localStorage.setItem("CommunicationState", data.communicationState);
}

// 선생님 장소 가져오기
async function getTeacherLocationState(email) {
  const document_name = email;
  const teacheRef = doc(db, "teacher", document_name);
  const teacherDoc = await getDoc(teacheRef);
  const data = teacherDoc.data();
  localStorage.setItem("Location", data.location);
}

// 선생님 상태 가져오기
async function getTeacherState(email) {
  const document_name = email;
  const teacheRef = doc(db, "teacher", document_name);
  const teacherDoc = await getDoc(teacheRef);
  const data = teacherDoc.data();
  localStorage.setItem("State", data.state);
}

// 선생님 연락여부 변경
async function ChangeTeacherCommunicationState(email) {
  const document_name = email;
  const teacheRef = doc(db, "teacher", document_name);
  const teacherDoc = await getDoc(teacheRef);
  const communicationState = teacherDoc.data().communicationState;
  await setDoc(
    teacheRef,
    {
      communicationState: !communicationState,
    },
    { merge: true }
  );
}

//선생님 위치 변경
async function ChangeTeacherLocationState(email, location) {
  const document_name = email;
  const teacheRef = doc(db, "teacher", document_name);
  await setDoc(
    teacheRef,
    {
      location: location,
    },
    { merge: true }
  );
}

//선생님 상테 변경
async function ChangeTeacherstate(email, state) {
  const document_name = email;
  const teacheRef = doc(db, "teacher", document_name);
  await setDoc(
    teacheRef,
    {
      state: state,
    },
    { merge: true }
  );
}

export default {
  findTeacher,
  getTeachers,
  ChangeTeacherCommunicationState,
  getTeacherCommunicationState,
  getTeacherState,
  getTeacherLocationState,
  ChangeTeacherLocationState,
  ChangeTeacherstate,
  filterTeacher,
};
