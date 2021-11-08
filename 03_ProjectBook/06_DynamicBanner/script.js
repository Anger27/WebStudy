var banner = document.getElementById("banner");
var img = banner.getElementsByTagName("img");
var toggle = document.getElementById("toggle");
var sound_btn = document.getElementById("sound_btn");

var banner_height = getComputedStyle(banner).height;
var cast = [];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function set_balloon(num) {
  // var x = Math.floor(Math.random() * (500 - 10) + 10);
  // var y = Math.floor(Math.random() * (400 - 120) + 120);
  // var size = Math.floor(Math.random() * (200 - 100) + 100);
  // var angle = Math.floor(Math.random() * (360 - 0) + 0);
  var x = randomNum(10, 500);
  var y = randomNum(120, 400);
  var size = randomNum(100, 200);
  var angle = randomNum(0, 360);
  var speed = Math.random() * (2 - 0) + 0;

  cast[num] = {
    x: x,
    y: -y,
    size: size,
    angle: angle,
    speed: speed
  };
}

function ball_init() {
  for (var i = 0; i < img.length; i++) {
    set_balloon(i);
    img[i].style.left = "-9999px";
    img[i].style.top = "-9999px";
  }
}

function animate_balloon() {
  for (var i = 0; i < img.length; i++) {
    img[i].style.left = cast[i].x + "px";
    img[i].style.top = cast[i].y + "px";
    img[i].style.transform = "rotate(" + cast[i].angle + "deg)";

    if (cast[i].y < parseInt(banner_height)) {
      cast[i].y += 1 + cast[i].speed;
      cast[i].angle += cast[i].speed;
    } else {
      set_balloon(i);
    }
  }
}

function bgm_init() {
  var bgm = new Audio();
  bgm.src = "images/bgm.mp3";
  bgm.loop = true;
  document.body.appendChild(bgm);
}

ball_init();
bgm_init();
setInterval(function() { animate_balloon(); }, 1000 / 30);

sound_btn.onclick = function(event) {
  var attr = sound_btn.getAttribute("class");
  var bgm = document.getElementsByTagName("audio");

  if (attr == "active") {
    sound_btn.removeAttribute("class");
    sound_btn.setAttribute("src", "images/sound_off.png");
    bgm[0].pause();
  } else {
    sound_btn.setAttribute("class", "active");
    sound_btn.setAttribute("src", "images/sound_on.png");
    bgm[0].play();
  }
  event.stopPropagation();
};

toggle.onclick = function() {
  var attr = banner.getAttribute("class");

  if (attr == "active") {
    banner.removeAttribute("class");
    toggle.innerHTML = "open banner";
    return false;
  } else {
    banner.setAttribute("class", "active");
    toggle.innerHTML = "close banner";
    return false;
  }
};

banner.onclick = function() {
  window.open("https://csslick.github.io", "_blank");
};

// practice
var practiceToggle = document.getElementById("togglePractice");
var gnb = document.getElementById("gnb");

practiceToggle.onclick = function() {
  var attr = gnb.getAttribute("class");

  if (attr == "active") {
    gnb.removeAttribute("class");
    return false;
  } else {
    gnb.setAttribute("class", "active");
    return false;
  }
};