let circle = document.getElementsByClassName("circle");
let circleShadow = document.getElementsByClassName("circle-shadow");
let body = document.querySelector("body");

let colors = [
  "#ef5350",
  "#ec407a",
  "#ec407a",
  "#7e57c2",
  "#5c6bc0",
  "#42a5f5",
  "#29b6f6",
  "#d4e157",
  "#ffee58",
  "#ffca28",
  "#ffa726",
  "#ff7043"
];

let onCircleClick = () => {
  let color = colors[Math.floor(Math.random() * colors.length - 1)];
  circle[0].style.backgroundColor = color;
  console.log(color);
  
  let bgColor = color + "22";
  body.style.backgroundColor  = bgColor;
  console.log(`bgColor : ${bgColor}`);
};

circle[0].addEventListener("click", onCircleClick);
circleShadow[0].addEventListener("click", onCircleClick);
