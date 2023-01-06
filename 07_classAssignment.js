class Vehicle {
    constructor (name, engine, price, seater, awarage, fuel){
    this.name= name;
    this.engine = engine;
    this.price = price;
    this.seater = seater;
    this.awarage = awarage;
    this.fuel = fuel;
}
}
console.log(`--------------------Question 1-----------------------`);

let VehCreta = new Vehicle ("creta", "1353 cc - 1497 cc", "Rs 10.44 - 18.24 Lakh",  5, "16.8 kmpl", "Diesel/Petrol");
let VehXuv = new Vehicle ("XUV 700", "1999 cc", "22.00 - 24.09 Lakh", 7, "20.2 kmpl", "Petrol");
let VehSafari = new Vehicle ("TATA safari", "1956 cc ", "15.40 - 23.05 Lakh", 7, "16.14 kmpl", "Diesel");
let VehBrezza = new Vehicle ("Maruti Brezza", "1462 cc", "7.99 - 13.96 Lakh", 5, "19.8 kmpl", "Petrol");
let VehHonda = new Vehicle ("HONDA UNOCORN", "149 cc", "90,741 - 1.29 Lakh", 2, "60 kmpl", "Petrol");

console.log(VehCreta);
console.log(VehXuv);
console.log(VehSafari);
console.log(VehBrezza);
console.log(VehHonda);
console.log(``);
console.log(`--------------------Question 2-----------------------`);
    

console.log(`Collage deatails`);
class CollageDeatails {
    constructor (name, location, founder, founded , departments,    ){
    this.name= name;
    this.location = location;
    this.founder = founder;
    this.founded = founded;
    this.departments = departments;
}
}
let collageRIT = new CollageDeatails ("RIT COLLAGE ISLAMPUR", "The founder of the collage is Jayantrao Patil", "Its founded established on 1983", "Islampur", " B.tech, M.tech, BBA, MBA" );

console.log(collageRIT.name, collageRIT.location, collageRIT.founded, collageRIT.founder,  collageRIT.departments);

for (const key in CollageDeatails) {
    if (Object.hasOwnProperty.call(CollageDeatails, key)) {
        const element = CollageDeatails [key, CollageDeatails];
        console.log(element);
        
    }
}

console.log(`--------------------Question 3-----------------------`);
console.log(``);
const collageDeatails = {
    name : "RIT Collage Islampur",
    location :  "Islampur",
    founder : "Jayantrao Patil",
    founded : 1983,
    departments : "B.tech, M.tech, BBA, MBA",
}

    for (const key in collageDeatails) {
        if (Object.hasOwnProperty.call(collageDeatails, key)) {
            const element = collageDeatails [key];
            console.log(element);
        }
    }
   