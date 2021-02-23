function getMyInput1(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var myinput = document.getElementById('myInput1').value;
  var li = document.createElement("li");
  var button = document.createElement("button");
  var buttonName = "Delete";
  document.getElementById("demo").appendChild(li);
  document.getElementById("demo").appendChild(button);
  button.innerHTML = buttonName;
  button.setAttribute("id", "button1");
  button.setAttribute("onclick", "deleteMyInput()");

  if(minutes<10){
      li.innerHTML = myinput + "  " + hours + ":" + "0" + minutes + ":" + "0" + seconds;
      console.log(minutes);
  }else{
    li.innerHTML = myinput + "  " + hours + ":" + minutes + ":" + seconds;
    console.log("else");
  }
  console.log(li);
  console.log(date);
}
function deleteMyInput(){
   var li = document.getElementById('demo').innerHTML = "";
}
