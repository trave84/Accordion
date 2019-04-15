let title = document.getElementById("title-btn");
let text = document.getElementById("text-content");
let expansion = title.getAttribute("aria-expanded");
let visibility = text.getAttribute("aria-hidden");

title.onclick = () => {
  title.classList.toggle("text-shown");
  if (text.style.maxHeight) {
    text.style.maxHeight = null;
    expansion = "false";
    visibility = true;
  } else {
    text.style.maxHeight = text.scrollHeight + "px";
    access = "true";
    visibility = false;
  }
  title.setAttribute("aria-expanded", access);
  text.setAttribute("aria-hidden", visibility);
};
