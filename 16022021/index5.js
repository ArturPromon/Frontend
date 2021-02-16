function loadPerson(){
  let person= {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: "50"
  }
  var x = document.getElementById("demo");
  x.innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old ";
}
