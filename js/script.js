const addShowButton = document.querySelector(".add");
const showInput = document.querySelector(".add-show input");
const showList = document.querySelector(".show-list");
const showCount = document.querySelector(".number");

addShowButton.addEventListener("click", function () {
  const show = showInput.value;
  if (show !== "") {
    let listItem = document.createElement("li");
    listItem.innerText = show;
    showList.append(listItem);
    let shows = document.querySelectorAll(".show-list li");
    showCount.innerText = shows.length;
  }
});