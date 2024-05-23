
let past = [];
let count = -1;

function inputValue(value, inputId) {
  var input = document.getElementById(inputId);
  input.value = input.value + value;
}

function reset(inputId) {
  var input = document.getElementById(inputId);
  input.value = "";
  past = [];
  count = -1;
}

function calculate() {
  let input = document.getElementById("space");
  let expression = input.value;

  const oppat = /(&&|\|\||[&|^~!<>]{1,3})/g;
  const opdpat = /\b(\w+)\b/g;
  const opt = expression.match(oppat) || [];
  const opd = expression.match(opdpat) || [];

  const op1 = parseInt(opd[0], 2);
  const op2 = parseInt(opd[1], 2);

  let result;

  let btn1 = document.getElementById("disp1");
  let btn2 = document.getElementById("disp2");

  if (btn1.checked) {
    switch (opt[0]) {
      case "&":
        result = (op1 & op2).toString(2);
        break;
      case "|":
        result = (op1 | op2).toString(2);
        break;
      case "^":
        result = (op1 ^ op2).toString(2);
        break;
      case "~":
        result = (~op1).toString(2);
        break;
      case "&&":
        result = (op1 && op2).toString(2);
        break;
      case "||":
        result = (op1 || op2).toString(2);
        break;
      case "!":
        result = (!op1).toString(2);
        break;
      case "<<":
        result = (op1 << op2).toString(2);
        break;
      case ">>":
        result = (op1 >> op2).toString(2);
        break;
      case ">>>":
        result = (op1 >>> op2).toString(2);
      default:
        result = "Invalid operation";
    }

    input.value = result;

    past.push(expression);
    count = past.length - 1;
  }

  if (btn2.checked) {
    switch (opt[0]) {
      case "&":
        result = (op1 & op2).toString(2) + ", " + (op1 & op2);
        break;
      case "|":
        result = (op1 | op2).toString(2) + ", " + (op1 | op2);
        break;
      case "^":
        result = (op1 ^ op2).toString(2) + ", " + (op1 & op2);
        break;
      case "~":
        result = (~op1).toString(2) + ", " + ~op1;
        break;
      case "&&":
        result = (op1 && op2).toString(2) + ", " + (op1 && op2);
        break;
      case "||":
        result = (op1 || op2).toString(2) + ", " + (op1 || op2);
        break;
      case "!":
        result = (!op1).toString(2) + ", " + !op1;
        break;
      case "<<":
        result = (op1 << op2).toString(2) + ", " + (op1 << op2);
        break;
      case ">>":
        result = (op1 >> op2).toString(2) + ", " + (op1 >> op2);
        break;
      case ">>>":
        result = (op1 >>> op2).toString(2) + ", " + (op1 >>> op2);
      default:
        result = "Invalid operation";
    }

    input.value = result;

    past.push(expression);
    count = past.length - 1;
  }
}

function prev() {
  if (past.length > 0 && count > 0) {
    count--;
    document.getElementById("space").value = past[count];
  }
}

function next() {
  if (past.length > 0 && count < past.length - 1) {
    count++;
    document.getElementById("space").value = past[count];
  }
}
