let colorO = document.getElementById("color-a");
let colorT = document.getElementById("color-b");
let currentDirection = "to bottom";
let outputCode = document.getElementById("code");

const setDirection = (value, _this) => {
  let directions = document.querySelectorAll(".butons button");
  for (let i of directions) {
    i.classList.remove("active");
  }
  _this.classList.add("active");
  currentDirection = value;
};
const generateCode = () => {
  outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorO.value}, ${colorT.value})`;
  document.getElementsByTagName(
    "BODY"
  )[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorO.value}, ${colorT.value})`;
};
const copyTxt = () => {
  outputCode.select();
  document.execCommand("copy");
  alert("Gradient Copied!");
};

generateCode();
