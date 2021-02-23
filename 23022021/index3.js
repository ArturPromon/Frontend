function myFunction(){
  var title = document.getElementById('input1').value;
  var href = document.getElementById('input2').value;
  var a = document.createElement("a");
  a.innerHTML = title;
  a.href = href;
  document.getElementById('demo').appendChild(a);
}

function keyCode(event) {
  var x = event.keyCode;
  console.log(x);
  if (x == 13 || x==27) {
    var title = document.getElementById('input1').value;
    var href = document.getElementById('input2').value;
    var a = document.createElement("a");
    a.innerHTML = title;
    a.href = href;
    document.getElementById('demo').appendChild(a);
  }
}
