let fruits = ["apple", "orange", "plum"];

console.log(fruits[fruits.length]);

let groceryList = ["Brioche bread", "Eggs", "Cinnamon", "Heavy whipping cream", "Vanilla extract"];

console.log(groceryList.length);

groceryList[1] = null;
groceryList[3] = null;

console.log(groceryList);

groceryList.push("Honey", "Syrup");

console.log(groceryList);
console.log(groceryList.length);
