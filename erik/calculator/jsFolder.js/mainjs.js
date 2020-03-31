var output = document.querySelector("#output_value");
var operation = document.querySelector(".btn-operator");
var stash;
var numClear = true;
let total;

document.querySelectorAll(".btn_numbers").forEach(function(num) {
  num.addEventListener("click", function(e) {
    if (operation.value && numClear) {
      stash = output.value;
      output.value = "";
      numClear = false;
    }
    output.value = output.value + e.currentTarget.value;
    let a = Number(output.value);
    let b = Number(stash);
    let c;

    if (operation.value === "+") {
      c = a + b;
    }
    if (operation.value === "*") {
      c = a * b;
    }
    if (operation.value === "/") {
      c = a / b;
    }
    if (operation.value === "-") {
      c = a - b;
    }
    total = c;
  });
});

document.querySelectorAll(".btn-operator").forEach(function(op) {
  op.addEventListener("click", function(e) {
    operation.value = e.currentTarget.value;
    numClear = true;
  });
});

let equal = document.querySelector(".equal");
equal.addEventListener("click", function() {
  output_value.value = total;
});
document.querySelector(".precent").addEventListener("click", function() {
  output_value.value = parseInt(output_value.value) * 0.01;
});

document.querySelector(".pos_neg").addEventListener("click", function() {
  output_value.value = parseInt(output_value.value) * -1;
});

document.querySelector(".clear").addEventListener("click", function() {
  output_value.value = "";
});

document.querySelector(".decimal").addEventListener("click", function() {
  if (output_value.value.indexOf(".") === -1) output_value.value += ".";
});
