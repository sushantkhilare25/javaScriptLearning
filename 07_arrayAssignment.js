console.log(``);
const fruitSeasonal = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
console.log(`Givan Array is: "${fruitSeasonal}"`);
console.log(fruitSeasonal);
console.log(`1) Log first and last element`);
let firstElement = fruitSeasonal[0];
let lastElement = fruitSeasonal[fruitSeasonal.length - 1];
console.log(
  `The first Element is: "${firstElement}" and Last element is: "${lastElement}"`
);
console.log(
  `=========================================================================`
);
console.log(`2) Add papaya before Banana.`);
console.log(`before add Papaya: "${fruitSeasonal}"`);
fruitSeasonal.unshift("Papaya");
console.log(`After add Papaya: "${fruitSeasonal}"`);
console.log(fruitSeasonal);
console.log(
  `========================================================================`
);
console.log(`3) Remove the Mango from Array`);
console.log(`Before removing Mango: "${fruitSeasonal}"`);
fruitSeasonal.splice(4, 1);
console.log(`After Removing Mango: ${fruitSeasonal}`);
console.log(
  `========================================================================`
);
console.log(`4) Add pinaple the last index`);
console.log(`Before add pinaple: "${fruitSeasonal}`);
fruitSeasonal.push("pinaple");
console.log(`After add pinaple: "${fruitSeasonal}`);
console.log(
  `=======================================================================`
);
console.log(`5) Insert "Dragon fruit"before pinaple.`);
console.log(`Before Adding Dragon fruit: "${fruitSeasonal}"`);
fruitSeasonal.splice(fruitSeasonal.length - 1, 0, "Dragon Fruit");
console.log(`After Adding Dragon Fruit: "${fruitSeasonal}"`);
console.log(
  `======================================================================`
);
console.log(`6) Replace "orange" With "Kiwi"`);
console.log(`Before Replace Kiwi : "${fruitSeasonal}`);
fruitSeasonal.splice(2, 1, "Kiwi");
console.log(`After replace the Kiwi : "${fruitSeasonal}`);
console.log(
  `======================================================================`
);
console.log(`7) Log the element starting from 1 to 4.`);
console.log(`Given array is: "${fruitSeasonal}"`);
fruitSeasonal.splice(5);
fruitSeasonal.shift();
console.log(`Index 1 to 4 : "${fruitSeasonal}"`);
console.log(
  `=======================================================================`
);
console.log(`8) Only select last three element using lingth property`);
let newFruit = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
console.log(`Given Array: "${newFruit}"`);
let lastThree = newFruit.slice(newFruit.length - 3);
console.log(`Last three element in the Array: "${lastThree}"`);
