var formInput = document.forms["cal"];
var input = formInput.getElementsByTagName("input");
var clsBtn = document.getElementsByClassName("cls_btn")[0];
var resultBtn = document.getElementsByClassName("result_btn")[0];

for (var i = 0; i < input.length; i++) {
  if (input[i].value != "=" && input[i].value != "clear") {
    input[i].onclick = function() {
      calc(this.value);
    }
  }
}

function calc(value) {
  if (formInput["result"].value == 0) {
    formInput["result"].value = "";
  }
  formInput["result"].value += value;
}

function calcClear() {
  formInput["result"].value = 0;
}

clsBtn.onclick = function() {
  calcClear();
}

function calcResult() {
  var result = document.forms["cal"]["result"];
  var calc = eval(result.value);
  formInput["result"].value = calc;
}

resultBtn.onclick = function() {
  try {
    calcResult();
  } catch(err) {
    var result = formInput["result"];
    result.value = "ERROR";
  }
}

// practice
var frm = document.forms["frm"]; 
var practiceInput = frm.getElementsByTagName("input");

function result() {
  var a1, a2, answer;
  for (var i = 0; i < practiceInput.length; i++) {
    switch(practiceInput[i].name) {
      case "a1":
        a1 = practiceInput[i].value;
        break;
      case "a2":
        a2 = practiceInput[i].value;
        break;
      case "answer":
        answer = practiceInput[i].value;
        break;
    }
  }
  if (answer == eval(a1+"+"+a2)) {
    alert("correct answer");
  } else {
    alert("incorrect answer");
  }
}