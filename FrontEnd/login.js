const loginForm = document.querySelector("#login-form");
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const link = "test.html";

function login(event){
    event.preventDefault();
    console.log("ㅁㄴㅇㄹ");
    if(id.value == "admin"){
        if(password.value == "admin"){
            location.href = link;
        }
        else{
            console.log("비밀번호 틀림");
            password.value = "";
        }
    }
    else{
        console.log("아이디 틀림");
    }
}
function init(){
    loginForm.addEventListener('submit', login);
}

init();