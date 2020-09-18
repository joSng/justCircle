let circle = document.getElementsByClassName("circle");
let circleShadow = document.getElementsByClassName("circle-shadow");

let colors = [
  "#cff6cf",
  "#ffe0ac",
  "#ffacb7",
  "#beebe9",
  "#a0ffe6",
  "#be9fe1",
  "#e1ccec",
  "#f6ecbf",
  "#f6a7ba",
  "#b0deff",
  "#c8e7ed",
  "#ff8c94",
  "#cadefc",
];

let onCircleClick = () => {
  let color = colors[Math.floor(Math.random() * colors.length - 1)];
  circle[0].style.backgroundColor = color;
  console.log(color);
};

circle[0].addEventListener("click", onCircleClick);
circleShadow[0].addEventListener("click", onCircleClick);
