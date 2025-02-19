
"use strict";

const button1 = document.querySelector(".add");
const button2 = document.querySelector(".color");

button1.addEventListener("click", (e) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  document.body.appendChild(newDiv);
});

button2.addEventListener("click", (e) => {
  const divs = document.querySelectorAll(".box");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  divs.forEach((div) => {
    div.style.backgroundColor = randomColor;
  });
});

