let randHeight = 0;
let itemCard = document.getElementsByClassName("itemCard");

for (let i = 0; i < itemCard.length; i++) {
  randHeight = (Math.floor(Math.random() * 12) + 1) * 10;
  itemCard[i].style.height =  randHeight + "px";
  console.log("itemCard[" + i + "]: "+ randHeight + "px");
}