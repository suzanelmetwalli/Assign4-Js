var hello =document.getElementById("hello");
var userName = localStorage.getItem("userName")
hello.innerHTML = "welcome " + userName ;
var logoutBtn = document.getElementById("logoutBtn");
console.log(logoutBtn);
logoutBtn.addEventListener("click" ,logoutfun );
function logoutfun(){
    localStorage.removeItem("userName");
    window.location ='./index.html';

}