import {
  collection,
  getFirestore,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore/lite";

import { db } from "../config";

const studentCol = collection(db, "student");
const studentSnapshot = await getDocs(studentCol);
const studentList = studentSnapshot.docs.map((doc) => doc.data());
const studentListLen = studentList.length;

//생성
async function createStudent(email, name, works) {
  const document_name = email;

  try {
    const teacheRef = doc(db, "student", document_name);
    await setDoc(teacheRef, {
      email: email,
      name: name,
      works: works,
    });
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
    if (studentList[number].email === email) {
      const studenRef = doc(db, "student", email);

      const key =
        studentList[number].works === undefined
          ? 1
          : Object.keys(studentList[number].works).length + 1;

      if (studentList[number].works !== undefined) {
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

//찾기
async function findstudent(email) {
  for (var number = 0; number < studentListLen; number++) {
    if (studentList[number].email === email) {
      localStorage.setItem("name", studentList[number].name);
      localStorage.setItem("email", studentList[number].email);
      localStorage.setItem("role", "student");
    }
  }
}

//일정 조회
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

        const now = new Date();
        const startDate = new Date(start[0], start[1] - 1, start[2]);
        const endDate = new Date(end[0], end[1] - 1, end[2]);
        const currentDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        );

        if (startDate <= currentDate && currentDate <= endDate) {
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
  }
  return w_list;
}

export default { createStudent, creatework, findstudent, findwork };
