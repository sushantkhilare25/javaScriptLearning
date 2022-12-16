function display() {
  console.log("My name is: Sushant ");
  console.log("My surname is: khilare ");
}

display();

console.log("==============================");
function show() {
  console.log("My collage Name is: Y. C. collage Islampur");
}
show();

function swapValue(value1, value2) {
  console.log("====Before swap====");
  console.log(value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("====After swap====");
  console.log(value1, value2);
}
swapValue(100, 200);
swapValue(2, 4);
swapValue("Sachin", "Rohit");

console.log("===========================");
function hello(myName) {
  console.log(myName);
}
hello("Sachin");

console.log("Function of argument and return value");
function rajuBhaiya(paisa) {
  console.log("Going to market");
  console.log("purchesed fresh vegetable");
  console.log("come back");
  return "Bag of vegetable";
}
var bagOfVegetable = rajuBhaiya(100);
