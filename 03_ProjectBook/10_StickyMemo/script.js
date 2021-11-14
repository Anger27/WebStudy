// $(el).append(str);
function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

// #(el).width();
function getWidth(el) {
  var c = window.getComputedStyle(el);
  var border = parseFloat(c.borderLeftWidth) + parseFloat(c.borderRightWidth),
      padding = parseFloat(c.paddingLeft) + parseFloat(c.paddingRight);

  return el.offsetWidth  - border - padding;
}

// #(el).height();
function getHeight(el) {
  var c = window.getComputedStyle(el);
  var border = parseFloat(c.borderTopWidth) + parseFloat(c.borderBottomWidth),
      padding = parseFloat(c.paddingTop) + parseFloat(c.paddingBottom);
  var scrollBar = el.offsetHeight - el.clientHeight - border;

  if(c.boxSizing == "border-box") {
    return el.offsetHeight - border - padding;
  } else {
    return el.offsetHeight - border - padding - scrollBar;
  }
}

function initDrag(el) {
  var initX, initY, mousePressX, mousePressY;

  el.addEventListener('mousedown', function(event) {
      initX = this.offsetLeft;
      initY = this.offsetTop;
      mousePressX = event.clientX;
      mousePressY = event.clientY;

      this.addEventListener('mousemove', repositionElement, false);

      window.addEventListener('mouseup', function() {
        el.removeEventListener('mousemove', repositionElement, false);
      }, false);
  }, false);

  function repositionElement(event) {
      this.style.left = initX + event.clientX - mousePressX + 'px';
      this.style.top = initY + event.clientY - mousePressY + 'px';
  }
}

function initTouchDrag(object) {
  var initX, initY, firstX, firstY;

  object.addEventListener('mousedown', function(e) {
      e.preventDefault();
      initX = this.offsetLeft;
      initY = this.offsetTop;
      firstX = e.pageX;
      firstY = e.pageY;

      this.addEventListener('mousemove', dragIt, false);

      window.addEventListener('mouseup', function() {
          object.removeEventListener('mousemove', dragIt, false);
      }, false);
  }, false);

  object.addEventListener('touchstart', function(e) {
      e.preventDefault();
      initX = this.offsetLeft;
      initY = this.offsetTop;
      var touch = e.touches;
      firstX = touch[0].pageX;
      firstY = touch[0].pageY;

      this.addEventListener('touchmove', swipeIt, false);

      window.addEventListener('touchend', function(e) {
          e.preventDefault();
          object.removeEventListener('touchmove', swipeIt, false);
      }, false);

  }, false);

  function dragIt(e) {
      this.style.left = initX+e.pageX-firstX + 'px';
      this.style.top = initY+e.pageY-firstY + 'px';
  }

  function swipeIt(e) {
      var contact = e.touches;
      this.style.left = initX+contact[0].pageX-firstX + 'px';
      this.style.top = initY+contact[0].pageY-firstY + 'px';
  }
}

// $(parent).on("eventName", "childSelector", cb);
const addEventForChild = function(parent, eventName, childSelector, cb){      
  parent.addEventListener(eventName, function(event){
    const clickedElement = event.target,
    matchingChild = clickedElement.closest(childSelector)
    if (matchingChild) cb(matchingChild)
  })
};

// main code
(function() {
  var stickWrap = document.querySelector("#sticky_wrap");
  var sticky_html =
    "<div class='sticky'>" +
      "<nav class='top_nav'>" +
        "<a href='#' class='add'><i class='fa fa-plus'></i></a>" +
        "<a href='#' class='save'><i class='fa fa-floppy-o'></i></a>" +
        "<div class='right'>" +
          "<a href='#' class='get'><i class='fa fa-list'></i></a>" +
          "<a href='#' class='del'><i class='fa fa-times'></i></a>" +
        "</div>" +
      "</nav>" +
      "<textarea name='txt' class='txt'></textarea>" +
      "<nav class='side_nav'><ol></ol></nav>" +
    "</div>";

  var Sticky = {
    add : function() {
      var win_width = getWidth(stickWrap) - 250;
      var win_height = getHeight(stickWrap) - 300;
      var x = Math.random() * win_width;
      var y = Math.random() * win_height;

      appendHtml(stickWrap, sticky_html);
      var stickys = document.querySelectorAll(".sticky");
      var new_sticky = stickys[stickys.length - 1];

      new_sticky.style.left = parseInt(x) + "px";
      new_sticky.style.top = y + "px";

      for (var i = 0; i < stickys.length; i++) {
        stickys[i].style.zIndex = "0";
      }
      new_sticky.style.zIndex = "99";
    },
    save : function(current_memo) {
      var idx = localStorage.length;
      var txt = current_memo.value;

      if (txt !== "") {
        var key = prompt("Save name?", "");
        localStorage.setItem(key, txt);
      }
    },
    get : function list_storage(current_memo) {
      var key;
      var l = localStorage.length;
      var del_icon = "<i class='fa fa-trash'></i>";

      // current_memo.find("ol").empty();
      var curMemoOl = current_memo.querySelector("ol");
      curMemoOl.innerHTML = "";

      // current_memo.toggleClass("active");
      current_memo.classList.toggle("active");

      for (var i = 0; i < l; i++) {
        key = localStorage.key(i);
        // current_memo.find("ol").append("<li>" + key + del_icon + "</li>");
        curMemoOl.innerHTML += "<li>" + key + del_icon + "</li>";
      }

      var curMemoLi = current_memo.querySelectorAll("li");
      for (var i = 0; i < curMemoLi.length; i++) {
        curMemoLi[i].addEventListener("click", function() {
          var getData = this.innerText;
          var txt = localStorage.getItem(getData);

          current_memo.classList.toggle("active");
          current_memo.parentNode.querySelector(".txt").value = txt;
        });
      }

      var delBtn = current_memo.querySelectorAll("li > i");
      for (var i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("click", function() {
          var key = this.parentNode.innerText;
          var ok = confirm("Delete this memo?");
          if (ok) {
            localStorage.removeItem(key);
          }
        });
      }
    }
  };

  stickWrap.addEventListener("click", function(event){
    const clickedElement = event.target;

    if (clickedElement.closest(".add")) {
      Sticky.add();

      var sticky = this.querySelectorAll(".sticky");
      for (var i = 0; i < sticky.length; i++){
        initDrag(sticky[i]);
        // initTouchDrag(sticky[i]);
      }
    }

    if (clickedElement.closest(".save")) {
      // $(this).parent().sibling('.txt');
      var txtArea = clickedElement.parentNode;
      var current_memo = txtArea;

      while(1) {
        if (txtArea.querySelector(".txt")) {
          current_memo = txtArea.querySelector(".txt");
          break;
        } else {
          txtArea = txtArea.parentNode;
        }
      }
      Sticky.save(current_memo);
    }

    if (clickedElement.closest(".get")) {
      var sideNav = clickedElement.parentNode;
      var current_memo = sideNav;

      while(1) {
        if (sideNav.querySelector(".side_nav")) {
          current_memo = sideNav.querySelector(".side_nav");
          break;
        } else {
          sideNav = sideNav.parentNode;
        }
      }
      Sticky.get(current_memo);
    }

    if (clickedElement.closest(".del")) {
      var sticky = clickedElement.parentNode;

      while(1) {
        if (sticky.classList.contains("sticky")) {
          sticky.parentNode.removeChild(sticky);
          break;
        } else {
          sticky = sticky.parentNode;
        }
      }
    }
  });

  appendHtml(stickWrap, sticky_html);
  // $(.top_nav).parent().draggable();
  var sticky = document.querySelectorAll(".sticky");
  for (var i = 0; i < sticky.length; i++){
    initDrag(sticky[i]);
    // initTouchDrag(sticky[i]);
  }

})();
