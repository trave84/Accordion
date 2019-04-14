let title = document.getElementById("title-btn");
let text = document.getElementById("text-content");

title.onclick = () => {
  if (text.style.maxHeight) {
    text.style.maxHeight = null;
  } else {
    text.style.maxHeight = text.scrollHeight + "px";
  }
};
