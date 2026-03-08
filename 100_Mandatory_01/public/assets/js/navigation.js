// ============ Scripts ============

const docuBtn = document.getElementById("overView-link");
const aboutBtn = document.getElementById("vbtn-radio2");
const assignBtn = document.getElementById("vbtn-radio3");

docuBtn.addEventListener("click", () => {
  console.log("pressed documentation button");

  window.location.href = "/";
});

aboutBtn.addEventListener("click", () => {
  console.log("pressed about button");

  window.location.href = "/about";
  
});

assignBtn.addEventListener("click", () => {
  console.log("pressed assignment button");
  window.location.href = "/";
});
