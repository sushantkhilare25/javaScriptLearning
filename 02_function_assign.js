
function para(){
    console.log("=================================");
    console.log("=== [1] function with no Argument no return");
    console.log("I love JavaScript");
    console.log("Java is most popular language");
}

para();
console.log("=============================");
console.log("=======personal details=======");
function personalDetails (myName){
console.log(myName);

}
personalDetails("first Name: Sushant");
personalDetails("Last Name : Khilare");
personalDetails("Collage Name: Y.C. collage Islampur");
console.log("=============================");

console.log("=======Swap Value=======");
function swap_values( value1,value2){
    console.log("====Before swap====");
    console.log( value1,value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("====After swap====");
    console.log( value1, value2);
}
swap_values("Virat","Anushka");
swap_values(1000,2000);

console.log("=======Addition of Three Value=======");
function addThreeValue(num1,num2,num3){

var sum = num1+num2+num3;
console.log("Addition=" ,sum);
return sum;
}
addThreeValue(10.23,600,40);
addThreeValue("Hello","Good","Morning");

