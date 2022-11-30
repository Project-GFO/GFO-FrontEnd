const email = document.getElementById("email");
const password = document.getElementById("password");

const loginButton = document.getElementById("login-button");

const rwEmail = document.getElementById("rewrite-email");
const rwPassword = document.getElementById("rewrite-password");

function login(event){
    event.preventDefault();
    if(email.value != "admin"){
        rwEmail.style.visibility = "visible";
        email.style.borderBottomColor = "#FF3120";
        setTimeout(() => rwEmail.style.visibility = "hidden", 3000);
        setTimeout(() => email.style.borderBottomColor = "#999999", 3000);
    }else{
        if(password.value != "admin"){
            document.getElementById("rewrite-password").style.visibility = "visible";
            password.style.borderBottomColor = "#FF3120";
            setTimeout(() => rwPassword.style.visibility = "hidden", 3000);
            setTimeout(() => password.style.borderBottomColor = "#999999", 3000);
        }else{
            location.href = "MainPage.html";
        }
    }
}

