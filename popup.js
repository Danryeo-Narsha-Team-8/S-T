// DOM 요소 참조
const inputField = document.querySelector("input");
const infoSpan = document.querySelector("span");

// 이미지 클릭 시 URL 이동
document.getElementById("teacher-image").addEventListener("click", function () {
  chrome.tabs.create({ url: "https://studentteacher.netlify.app/" });
});

// input 필드에 입력값 변화 감지
inputField.addEventListener("input", async function () {
  if (inputField.value.trim() !== "") {
    const GetData = async () => {
      const name = inputField.value.trim();
      try {
        console.log(name);
        const response = await axios.get(
          `http://localhost:3000/get/teacher?name=${encodeURIComponent(name)}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.status === 200) {
          const data = response.data;

          // teacherState가 비어 있으면 "아무런 정보가 없습니다." 표시
          if (Object.keys(data).length === 0) {
            infoSpan.textContent = "아무런 정보가 없습니다.";
          } else {
            // 객체 값들만 가져와서 화면에 줄바꿈 포함 표시
            const teacherInfo = Object.values(data)
              .map((info) => `${info}\n`) // 각 정보에 줄바꿈 추가
              .join(""); // 하나의 문자열로 병합

            infoSpan.innerHTML = teacherInfo.replace(/\n/g, "<br>"); // 줄바꿈을 <br>로 변환
          }
        } else {
          infoSpan.textContent = `정보를 불러오는데에 실패하였습니다. (상태 코드: ${response.status}, 메시지: ${response.statusText})`;
        }
      } catch (error) {
        console.error(error);
        infoSpan.textContent = "정보를 불러오는데에 실패하였습니다.";
      }
    };

    await GetData();
  } else {
    infoSpan.textContent = "아무런 정보가 없습니다.";
  }
});
