function Question(text, choice, answer) {
  this.text = text;
  this.choice = choice;
  this.answer = answer;
}

function Quiz(question) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

var questions = [
  new Question("First browswer?", ["mosaic", "Internet explorer", "Google Chrome", "Netscape Navigator"], "Netscape Navigator"),
  new Question("How to wirte web document style?", ["HTML", "jQuery", "CSS", "XML"], "CSS"),
  new Question("What is Interface of Command line base?", ["GUI", "CLI", "HUD", "SI"], "CLI"),
  new Question("Font weight attribute of CSS?", ["font-size", "font-style", "font-weight", "font-variant"], "font-weight")
];

var quiz = new Quiz(questions);

function update_quiz() {
  var question = document.getElementById("question");
  var idx = quiz.questionIndex + 1;
  var choice = document.querySelectorAll(".btn");

  question.innerHTML = "Question " + idx + ") " + quiz.questions[quiz.questionIndex].text;

  for(var i = 0; i < quiz.questions.length; i++) {
    choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
  }

  progress();
}

Quiz.prototype.correctAnswer = function(answer) {
  return answer == this.questions[this.questionIndex].answer;
};

function progress() {
  var progress = document.getElementById("progress");
  progress.innerHTML = "Question " + (quiz.questionIndex + 1) + " / " + quiz.questions.length;
}

var btn = document.querySelectorAll(".btn");

function checkAnswer(i) {
  btn[i].addEventListener("click", function() {
    var answer = btn[i].innerHTML;

    if (quiz.correctAnswer(answer)) {
      alert("Correct!");
      quiz.score++;
    } else {
      alert("Wrong...");
    }

    if (quiz.questionIndex < quiz.questions.length - 1) {
      quiz.questionIndex++;
      update_quiz();
    } else {
      result();
    }
  });
}

function result() {
  var quiz_div = document.getElementById("quiz");
  var per = parseInt((quiz.score * 100) / quiz.questions.length);
  var txt = "<h1>RESULT</h1>" +
            "<h2 id='score'> Your Score : " + quiz.score + " / " + quiz.questions.length +
            "<br><br>" + per + "</h2>";

  quiz_div.innerHTML = txt;

  if (per < 60) {
    txt += "<h2 style='color:red'>GOOD!</h2>";
    quiz_div.innerHTML = txt;
  } else if (per >= 60 && per < 80) {
    txt += "<h2 style='color:red'>COOL!!</h2>";
    quiz_div.innerHTML = txt;
  } else if (per >= 80) {
    txt += "<h2 style='color:red'>PERFECT!!!</h2>";
    quiz_div.innerHTML = txt;
  }
}

for (var i = 0; i < btn.length; i++) {
  checkAnswer(i);
}

update_quiz();