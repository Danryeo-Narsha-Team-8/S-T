document.getElementById("teacher-image").addEventListener("click", function () {
  chrome.tabs.create({ url: "https://studentteacher.netlify.app/" });
});
