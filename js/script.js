const display = document.querySelector("#result");

function appendToResult(val) {
  const operators = ["+", "-", "*", "/", "."];
  let lastChar = display.value.slice(-1);
  if (operators.includes(val) && operators.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + val;
  }
  if (val === "**" && operators.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + val;
    return;
  }
  display.value += val;
}

function clearResult() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  if (display.value === "") return;

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
