"use strict";
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
let elements = document.querySelector("#elements");

searchForm.addEventListener("submit", function addItem(event) {
  event.preventDefault();
  const item = searchInput.value.trim();
  searchInput.value = "";
  if (!item.length) return;
  showItemToScreen(item);
});

function showItemToScreen(word) {
  let li = document.createElement("li");
  li.innerText = `${word}`;
  li.classList.add("bibibobo");
  elements.appendChild(li);
}