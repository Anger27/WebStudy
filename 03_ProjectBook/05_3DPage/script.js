var wrapper = document.querySelector(".wrapper");
var page = document.querySelectorAll(".page");
var indicator = document.getElementById("indicator");
var indicator_li = indicator.querySelectorAll("li");

var yDeg = 0;
var indicator_num = 1;
var indicator_length = page.length;
var w = page[0].offsetWidth;
var wDist = Math.tan(54) * w;
var page_angle = 0;

var hammer = new Hammer(wrapper);

function init_page() {
  w = page[0].offsetWidth;

  for (var i = 0; i < page.length; i++) {
    page[i].style.transform = "rotateY(" + page_angle + "deg) translateZ(" + (wDist) + "px)";
    page_angle += 72;
  }

  wrapper.style.transform = "translateZ(" + (-wDist) + "px) rotateY(" + yDeg + "deg)";
}

function init_indicator() {
  for (var i = 0; i < indicator_length; i++) {
    indicator.innerHTML += "<li>" + (i + 1) + "</li>";
  }

  indicator_li = indicator.querySelectorAll("li");
  change_page(indicator_num);
}

function change_page(inum) {
  indicator_li[inum - 1].setAttribute("class", "active");
  yDeg = -72 * (inum - 1);
  wrapper.style.transform = "translateZ(" + (-wDist) + "px) rotateY(" + yDeg + "deg)";

  for (var i = 0; i < indicator_length; i++) {
    indicator_li[i].removeAttribute("class");
  }
  indicator_li[inum - 1].setAttribute("class", "active");
}

init_page();
init_indicator();

for (var i = 0; i < indicator_length; i++) {
  indicator_li[i].addEventListener("click", function() {
    indicator_num = parseInt(this.innerHTML);
    change_page(indicator_num);
  });
}

hammer.on("swipeleft", function(e) {
  if (indicator_num < indicator_length) {
    page_vector = 1;
  } else {
    page_vector = 0;
  }
  indicator_num += page_vector;
  change_page(indicator_num);
});

hammer.on("swiperight", function(e) {
  if (indicator_num > 1) {
    page_vector = -1;
  } else {
    page_vector = 0;
  }
  indicator_num += page_vector;
  change_page(indicator_num);
});

window.onresize = function() {
  init_page();
}

// practice
var practiceBox = document.querySelector("#box");
var boxDeg = 0;
var boxHammer = new Hammer(practiceBox);

function rotateBox(bLeft) {
  if (bLeft == true) {
    boxDeg -= 10;
    practiceBox.style.transform = "rotate(" + boxDeg + "deg)"
  }else {
    boxDeg += 10;
    practiceBox.style.transform = "rotate(" + boxDeg + "deg)"
  }
}

boxHammer.on("panleft", function(e) {
  rotateBox(true);
});

boxHammer.on("panright", function(e) {
  rotateBox(false);
});