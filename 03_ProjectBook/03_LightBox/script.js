var indicator = document.querySelectorAll(".indicator button");
var lightbox = document.querySelector("#lightbox");
var block = document.querySelector("#block");

function lightbox_open(num) {
  lightbox.setAttribute("class", "active");
  block.setAttribute("class", "active");
  change_img(num);
  indicator[num-1].focus();
}

function lightbox_close() {
  lightbox.removeAttribute("class");
  block.removeAttribute("class");
}

function change_img(val) {
  var imgs = document.querySelectorAll("figure > img");

  for (var i = 0; i < imgs.length; i++) {
    imgs[i].removeAttribute("class");
  }
  imgs[val-1].setAttribute("class", "active");
}

// practice
function changeImg() {
  var imgs = document.querySelectorAll("body > img");

  if (imgs.length <= 0) {
    return alert("NO IMG");
  }

  var firstImg = imgs[0].getAttribute("src");
  imgs[0].setAttribute("src", imgs[imgs.length-1].getAttribute("src"));
  imgs[imgs.length-1].setAttribute("src", firstImg);
}