const button = document.getElementById("form-change-button");
const changeForm = document.getElementById("change-form");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

const changeSub = document.getElementById('change-sub')
const changeContent = document.getElementById('change-content')
const formChangeButton = document.getElementById('form-change-button')
var count = 0;
button.addEventListener("click", () => {
    if (count % 2 == 0){
        count++;
        changeForm.style.animationPlayState = "running";
        loginForm.style.animationPlayState = "running";
        signupForm.style.animationPlayState = "running";
        setTimeout(() => changeSub.textContent = "Welcome back!", 650);
        setTimeout(() => changeContent.innerHTML = "To keep connected with us please<br/> login with your profile info", 650);
        setTimeout(() => formChangeButton.textContent = "Login", 650);
    }
    else{

    }
})
