// 학생 생성과 일 추가
// npm run student

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  collection,
  getDocs,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore/lite";

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

// Firebase 앱 초기화=
const app = initializeApp(firebaseConfig);

// Firestore 초기화
const db = getFirestore(app);

// 인증 초기화
const auth = getAuth(app);

//파이어베이스 변수
const studentCol = collection(db, "student");
const studentSnapshot = await getDocs(studentCol);
const studentList = studentSnapshot.docs.map((doc) => doc.data());
const studentListLen = studentList.length;

const studentEmail = "qazcgik@gmail.com"; // 이메일로 구분함 (중복되면 변경됨)
const studentName = "서현동";
const studentWorks = {};
const Todo = "숙제하기";
const TodoTeacher = "손지웅";
const workStartDate = "2024/12/12";
const workEndDate = "2024/12/14";

// 학생 생성
async function createStudent(email, name, works) {
  const document_name = email;

  try {
    const teacheRef = doc(db, "student", document_name);
    await setDoc(teacheRef, {
      email: email,
      name: name,
      works: works,
    });
    console.log(`${name} 학생이 추가되었습니다.`);
  } catch (error) {
    console.error("학생 생성 실패:", error);
  }
}

// 일정추가
async function creatework(
  email,
  Todo,
  TodoTeacher,
  workStartDate,
  workEndDate
) {
  for (var number = 0; number < studentListLen; number++) {
    if (studentList[number].email == email) {
      const studenRef = doc(db, "student", email);

      const key =
        studentList[number].works === undefined
          ? 1
          : Object.keys(studentList[number].works).length + 1;

      if (studentList[number].works != undefined) {
        try {
          await setDoc(
            studenRef,
            {
              works: {
                [key]: {
                  Todo: Todo,
                  TodoTeacher: TodoTeacher,
                  workStartDate: workStartDate,
                  workEndDate: workEndDate,
                },
              },
            },
            { merge: true }
          );
        } catch (error) {
          console.error("일정 추가 실패:", error);
        }
      } else {
        try {
          await setDoc(
            studenRef,
            {
              works: {
                [key]: {
                  Todo: Todo,
                  TodoTeacher: TodoTeacher,
                  workStartDate: workStartDate,
                  workEndDate: workEndDate,
                },
              },
            },
            { merge: true }
          );
        } catch (error) {
          console.error("일정 추가 실패:", error);
        }
      }
    }
  }
}

// 학생 이메일  단일 조회
async function findstudent(email) {
  for (var number = 0; number < studentListLen; number++) {
    if (studentList[number].email === email) {
      console.log(`${studentList[number].name} 학생의 정보입니다.`);
      console.log(`==============================================`);
      console.log(studentList[number]);
    }
  }
}
async function findwork(email) {
  let count = 0;
  let w_list = {};

  for (let number = 0; number < studentListLen; number++) {
    if (studentList[number].email === email) {
      const studentworksLen = Object.keys(studentList[number].works).length;
      for (let workIndex = 1; workIndex < studentworksLen + 1; workIndex++) {
        const start =
          studentList[number].works[workIndex].workStartDate.split("/");
        const end = studentList[number].works[workIndex].workEndDate.split("/");

        const now = new Date(); // 현재 날짜를 now 변수에 할당
        const startDate = new Date(start[0], start[1], start[2]);
        const endDate = new Date(end[0], end[1], end[2]);
        const currentDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        );

        // if ( startDate => currentDate && currentDate <= endDate) {
        if(startDate >= currentDate && currentDate <= endDate)
          w_list[count + 1] = {
            Todo: studentList[number].works[workIndex].Todo,
            TodoTeacher: studentList[number].works[workIndex].TodoTeacher,
            workStartDate: studentList[number].works[workIndex].workStartDate,
            workEndDate: studentList[number].works[workIndex].workEndDate,
          };
          count += 1;
        }
      }
    }

  console.log(w_list);
}


//학생 추가하기
//createStudent(studentEmail, studentName, studentWorks);
//일정추가하기
//creatework(studentEmail, Todo, TodoTeacher, workStartDate, workEndDate);
//학생(이름 추출) 찾기
//findstudent(studentEmail);
//일정 보여주기 : 날짜에 따라
findwork(studentEmail);
