let title = document.getElementById("title-btn");
let text = document.getElementById("text-content");
let access = title.getAttribute("aria-expanded");

title.onclick = () => {
  title.classList.toggle("text-shown");
  if (text.style.maxHeight) {
    text.style.maxHeight = null;
    access = "false";
  } else {
    text.style.maxHeight = text.scrollHeight + "px";
    access = "true";
  }
  title.setAttribute("aria-expanded", access);
  text.setAttribute("aria-hidden", !access);
};
