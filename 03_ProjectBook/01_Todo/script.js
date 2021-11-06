var title = document.getElementById("title");
var list = document.getElementById("list");
var li = list.getElementsByTagName("li");
var addBtn = document.getElementById("add-btn");
var practiceBtn = document.getElementById("practice-btn");

list.addEventListener("click", activeItem);

function activeItem(event) {
  if (event.target.nodeName == "LI") {
    title.innerHTML = event.target.innerHTML;

    for (var i = 0; i < event.target.parentNode.children.length; i++) {
      event.target.parentNode.children[i].removeAttribute("class");
    }

    event.target.setAttribute("class", "active");
  }
}

addBtn.addEventListener("click", function() {
  var txt = prompt("input title");
  list.innerHTML += "<li>" + txt + "</li>";
});

// practice
practiceBtn.addEventListener("click", function() {
  if (li.length <= 0) {
    return alert("list is empty!");
  }

  var firstTxt = li[0].innerHTML;
  var lastTxt = li[li.length-1].innerHTML;

  li[0].innerHTML = lastTxt;
  li[li.length-1].innerHTML = firstTxt;
});