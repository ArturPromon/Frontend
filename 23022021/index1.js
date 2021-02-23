function getMyInput1(){
  var x = document.getElementById('myInput1').value;
  var y = document.getElementById('demo1').innerHTML = x;
}

function deleteMyInput1(){
  var x = document.getElementById('demo1').innerHTML = "";
}

function getMyInput2(){
  var x = document.getElementById('myInput2').value;
  var y = document.getElementById('demo2').innerHTML = x;
}

function deleteMyInput2(){
  var x = document.getElementById('demo2').innerHTML = "";
}

function myFunction1(){
  // document.body.style.backgroundColor = "white";
  // document.body.style.Color = "black";
  var element = document.body;
  element.className = "Light-mode";
}

function myFunction2(){
  var element = document.body;
  element.className = "Night-mode";
}

function myFunction3(){
  var element = document.body;
  element.classList.toggle("Night-mode");
}
