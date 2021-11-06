function createFlexItem() {
  let newFlexItem = document.createElement("div");
  newFlexItem.setAttribute("class", "flexItem");
  newFlexItem.appendChild(createImg());

  return newFlexItem;
}

function createImg() {
  let newImg = document.createElement("img");
  newImg.setAttribute("src", getRandURL());

  return newImg;
}

function getRandURL() {
  return "https://picsum.photos/" + (Math.floor(Math.random() * 12) + 1) * 100 + "/" + (Math.floor(Math.random() * 12) + 1) * 100;
}

function addFlexItem() {
  let container = document.getElementsByClassName("imgFlexContainer");

  for (let i = 0; i < 10; i++) {
    container[0].appendChild(createFlexItem());
  }
}

// main
let btnLoader = document.getElementById("btnLoad");
btnLoader.onclick = function() {addFlexItem()};

addFlexItem();