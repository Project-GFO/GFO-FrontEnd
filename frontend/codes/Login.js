let id = document.querySelector("#email-button");
let pw = document.querySelector("#password-button");
let btn = document.querySelector("#login-button");

btn.addEventListener("click", () => {
  if (id.value == "") {
    label = id.nextElementSibling;
    label.classList.add("warning");
    setTimeout(() => {
      label.classList.remove("warning");
    }, 1500);
  } else if (pw.value == "") {
    label = pw.nextElementSibling;
    label.classList.add("warning");
    setTimeout(() => {
      label.classList.remove("warning");
    }, 1500);
  }
});
