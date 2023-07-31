var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var inputPass = document.getElementById("inputPass");
var usersContainer =[];
if (localStorage.getItem("users")!= null) {
    usersContainer = JSON.parse(localStorage.getItem("users"))
}

function addUser(){
    var pRequired =document.getElementById("pRequired");
    var emailReq =document.getElementById("emailReq");
    if (inputName.value =="" || inputEmail.value =="" || inputPass.value =="") {
        pRequired.innerHTML=" All input required";
        pRequired.classList.replace("d-none" , "d-block");
        pRequired.classList.replace ("text-success" ,"text-danger" );
        emailReq.innerHTML ="";
    } else {
        if (validateName() && validateEmail()) {
            var user ={
                name: inputName.value ,
                email: inputEmail.value ,
                pass: inputPass.value
            }
            if (!usersContainer.find((e) => e.email == inputEmail.value)) {
                usersContainer.push(user);
                localStorage.setItem("users", JSON.stringify(usersContainer));
                emailReq.innerHTML ="";
                pRequired.innerHTML = "Success";
                pRequired.classList.replace("d-none" , "d-block");
                pRequired.classList.replace("text-danger" , "text-success");
                window.setTimeout(function(){
                    window.location= "./index.html";
                
                }, 3000);
            }else {
                emailReq.classList.replace("d-none" , "d-block");
                emailReq.innerHTML="Email already exists";
                pRequired.innerHTML="";
                
            }
        }else {
            pRequired.innerHTML="Data Not Valid";
            pRequired.classList.replace("d-none" , "d-block");
            pRequired.classList.replace ("text-success" ,"text-danger" );
            emailReq.innerHTML ='';
        }
    }
   
}
var btnSignup = document.getElementById("btnSignup");
btnSignup.addEventListener("click" , function(){
    addUser();
});

function validateName() {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = inputName.value;
        if (regName.test(name)) {
            return true;
        }else {
            return false
        }
}
function validateEmail(){
    var regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    var email = inputEmail.value;
    if (regEmail.test(email)) {
        return true;
    }else {
        return false
    }
}




