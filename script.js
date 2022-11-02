let outputscreen = document.getElementById("outputscreen");
function display(num) {
  outputscreen.value += num;
}
function Clear() {
  outputscreen.value = "";
  console.log("called");
}
function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value);
  } catch (err) {
    outputscreen.value = "syntax error";
    outputscreen.style.color="white"
    outputscreen.style.fontSize="20px"
    outputscreen.style.textAlign="center"
    outputscreen.style.backgroundColor="red"
  }
}
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}
