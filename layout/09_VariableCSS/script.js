let items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
  console.log(window.getComputedStyle(items[i], null).getPropertyValue('font-size'));
}