console.log('String is: 1) I AM Learning JavaScript, The Language of internet');
var sentence = "I AM Learning JavaScript, The Language of internet";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='A' ) {
        console.log(char);
        counter = counter +1;
       
        
    }
    
}
console.log(`Total 'A'/ 'a' in above string is : ${counter}`);

console.log("=========================================================");

console.log(`String is : 2) My favourite movie is LAggAn`);
var sentence = "My favourite movie is LAggAn";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='A' || char=='a') {
        console.log(char);
        counter = counter +1;
    }
    
}
console.log(`Total 'a'/'A' in above string is : ${counter}`);