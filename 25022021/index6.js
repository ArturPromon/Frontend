var input;
var timer;

window.onload = function(){
  console.log("Hello world!");

  document.querySelector("#saveLocal").addEventListener('click', saveLocal);
  document.querySelector("#deleteLocal").addEventListener('click', deleteLocal);
  window.addEventListener('keypress', autosave);

  input = document.querySelector("#textInput");

  var localValue = localStorage.getItem('textInput');
  if(localValue){
    input.value = JSON.parse(localValue).text;
  }
}

function autosave(){
  if(timer){
    clearTimeout(timer);
  }
timer = window.setTimeout(function(){
  saveLocal();
  console.log("autosave");
},3000)
};

function saveLocal(){
  var obj = {
    text: input.value,
    date: new Date()
  }
  console.log(obj);
  localStorage.setItem('textInput', JSON.stringify(obj));
};

function deleteLocal(){
  localStorage.removeItem('textInput');
  input.value="";
}
