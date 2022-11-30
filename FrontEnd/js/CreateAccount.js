const password = document.getElementById("password");
const passwordAgain = document.getElementById("password-again");
const rwPassword = document.getElementById("rewrite-password");

function CreateAccount(event){
    event.preventDefault();
    if(password.value != passwordAgain.value){
        rwPassword.style.visibility = "visible";
        password.style.borderBottomColor = "#FF3120";
        passwordAgain.style.borderBottomColor = "#FF3120";
        setTimeout(() => rwPassword.style.visibility = "hidden", 3000);
        setTimeout(() => password.style.borderBottomColor = "#999999", 3000);
        setTimeout(() => passwordAgain.style.borderBottomColor = "#999999", 3000);
    }
}
