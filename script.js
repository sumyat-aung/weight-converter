// grab input
const input = document.getElementById("input");

// grap 3 out put
const gout = document.getElementById("g-output");
const kout = document.getElementById("k-output");
const Oout = document.getElementById("o-output");

// grab whole output
const wrap = document.getElementById("wrap");

// hide the box
wrap.style.visibility = "hidden";

// input event

input.addEventListener("input", function () {
  // unhide the box
  wrap.style.visibility = "visible";
  let lbs = input.value;
  gout.textContent = lbs * 453.59237 + " g";
  kout.textContent = lbs * 0.45359237 + " kg";
  Oout.textContent = lbs * 16 + " oz";
});
