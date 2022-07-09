
const copyBtnText = document.querySelector("#copy-btn-text");
let copyText = document.querySelector("#span-num").textContent;
function changeValue() {
  navigator.clipboard.writeText(copyText);
  // changing the text
  copyBtnText.innerHTML = "Copied!";
}
document.getElementById('btn-click').onclick = changeValue;