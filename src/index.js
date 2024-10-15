import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

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
console.log("[INFO] Initializing Firebase app...");
const app = initializeApp(firebaseConfig);

// Firestore 초기화
console.log("[INFO] Initializing Firestore...");
const db = getFirestore(app);

// 인증 초기화
console.log("[INFO] Initializing Firebase Authentication...");
const auth = getAuth(app);

// 로그인 상태 변화 감지
console.log("[INFO] Checking authentication state...");
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`[INFO] User is logged in: ${user.email}`);
  } else {
    console.log("[INFO] No user is logged in");
  }
});

// Firestore에서 도시 목록 가져오기
async function getCities() {
  console.log("[INFO] Fetching cities from Firestore...");
  try {
    const citiesCol = collection(db, "cities");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    console.log("[INFO] City List:", cityList);
    return cityList;
  } catch (error) {
    console.error("[ERROR] Error fetching cities:", error);
  }
}

// Firestore에서 도시 목록 불러오기 테스트
getCities();
