var login;
var password;
var login2;
var password2;

window.onload = function(){
  document.querySelector("#savelocal").addEventListener('click', savelocal);
  document.querySelector("#getlocal").addEventListener('click', getlocal);

  login = document.querySelector("#username1");
  password = document.querySelector("#password1");
  login2= document.querySelector("#username2");
  password2 = document.querySelector("#password2");

}

function savelocal(){
  var obj = {
    login: login.value,
    password: password.value
  }
  localStorage.setItem("Registration", JSON.stringify(obj));
}

function getlocal(){
  var localValue = localStorage.getItem("Registration");
  var loginvalue = JSON.parse(localValue).login;
  var passwordvalue = JSON.parse(localValue).password;
  // console.log(loginvalue);
  // console.log(passwordvalue);
  // console.log(login2.value);
  // console.log(password2.value);

  if(login2.value == loginvalue && password2.value == passwordvalue){
    alert("Login success");
  }else{
    alert("Login or password invalid");
  }

}
