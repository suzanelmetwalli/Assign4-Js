
var users = [];
if (localStorage.getItem("users")!= null) {
    users = JSON.parse(localStorage.getItem("users"));
}
var email =document.getElementById("inputEmail").value;
 var pass =document.getElementById("inputPass").value;

function checkLogin() {
   var email =document.getElementById("inputEmail").value;
    var pass =document.getElementById("inputPass").value;
    var error = document.getElementById("error");
    if (users.find((e) => e.email == email)){
        if(users.find((e) => e.pass == pass)){
            var user = (users.find((e) => e.pass == pass));
            console.log(user);
            localStorage.setItem("userName" , user.name);
            window.location ='./home.html';
        }else{
            error.classList.remove("d-none");
            error.classList.add("d-block");
        }
        
    }else{
        error.classList.remove("d-none");
        error.classList.add("d-block");
    }
}
var btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click" ,checkLogin );

