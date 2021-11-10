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
    outputscreen.value = "error";
    // alert("invalid");
    document.write("error occured");
  }
}
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}
