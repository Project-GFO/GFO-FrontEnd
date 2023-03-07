const myQuestion = document.getElementById("my-ques");
const myAwnser = document.getElementById("my-awns");

function quesTabChange() {
  if (myQuestion.className.className == "selected") return;
  else {
    myAwnser.classList.remove("selected");
    myQuestion.classList.add("selected");
  }
}
function awnsTabChange() {
  if (myAwnser.className.className == "selected") return;
  else {
    myQuestion.classList.remove("selected");
    myAwnser.classList.add("selected");
  }
}

myQuestion.addEventListener("click", quesTabChange);
myAwnser.addEventListener("click", awnsTabChange);
