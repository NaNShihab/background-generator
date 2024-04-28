var _ = require("lodash");
var array = [1,2,3,4,5,6,7,8];
console.log("answer", _.without(array, 3));

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var h3 = document.querySelector("h3");
var body = document.getElementById("bd");
var fun = () => {
    body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
    h3.textContent = body.style.background;
}
input1.addEventListener("input", fun)
input2.addEventListener("input", fun)