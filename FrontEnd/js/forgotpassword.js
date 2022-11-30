const spend = document.getElementById("spend");
const email = document.getElementById("email");
const box = document.getElementById("box");
const rwEmail = document.getElementById("rw-email");


function sending(event){
    event.preventDefault();

    if(email.value == ""){
        email.style.borderBottomColor = "#FF3120";
        rwEmail.style.visibility = "visible";
        setTimeout(() => email.style.borderBottomColor = "#999999", 3000);
        setTimeout(() => rwEmail.style.visibility = "hidden", 3000);
    }

    else{
    box.style.visibility = "visible";

    document.getElementById("confirm-button").addEventListener("click", () =>{
        box.style.visibility = "hidden";
    })
    }
}