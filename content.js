let keysPressed = {};

document.addEventListener("keydown", function (event) {
  if (event.key === "s") {
    keysPressed["S"] = true;
  }
  if (event.key === "t") {
    keysPressed["T"] = true;
  }

  // S와 T를 동시에 누르면 백그라운드로 메시지 보내기
  if (keysPressed["S"] && keysPressed["T"]) {
    chrome.runtime.sendMessage({ action: "navigate_to_url" });
    keysPressed = {}; // 키 상태 초기화
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "s") {
    keysPressed["S"] = false;
  }
  if (event.key === "t") {
    keysPressed["T"] = false;
  }
});
