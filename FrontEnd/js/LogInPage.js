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
        running();
        textChange();
        
        signupForm.style.visibility = "visible";
        
        setTimeout(() => {
            loginForm.style.visibility = "hidden";
        }, 1000);
    }
        
    
    else{
        running();
        textChange();
        
        loginForm.style.visibility = "visible";
        setTimeout(() => {
            signupForm.style.visibility = "hidden"; 
        }, 1000);
        
    }
    count++;
})

function running(){
    changeForm.style.animationPlayState = "running";
    loginForm.style.animationPlayState = "running";
    signupForm.style.animationPlayState = "running";
    setTimeout(() => {changeForm.style.animationPlayState = "paused"}, 2000);
    setTimeout(() => {
        loginForm.style.animationPlayState = "paused";
        signupForm.style.animationPlayState = "paused";
    }, 1000);
}
function textChange(){
    let currentText = null;
    if(count % 2 == 0){
        currentText = changedText;
    }
    else{
        currentText = originText;
    }
    setTimeout(() => changeSub.textContent = currentText[0], 650);
    setTimeout(() => changeContent.innerHTML = currentText[1], 650);
    setTimeout(() => formChangeButton.textContent = currentText[2], 650);
}

const changedText = ["Welcome back!", "To keep connected with us please<br/> login with your profile info", "Login"];
const originText = ['Welcome to GFO', 'Enter your personal details and<br>start journey with us', 'Sign up'];

set(()=>{
    loginForm.style.visibility = "visible";
    signupForm.style.visibility = "hidden";
});