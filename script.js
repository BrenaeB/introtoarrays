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




//Sarahs shopping cart
let shoppingCart = [];
 
shoppingCart.push("milk", "bread", "eggs");

console.log(shoppingCart);


let lastItem = shoppingCart.pop();

console.log(lastItem);      // "eggs" (the last item removed)  
console.log(shoppingCart);  // ["milk", "bread"] (updated shopping cart)  


//Break down the For Loop

let pets = ["cat", "dog", "fish", "ferret", "bunny"];
console.log(`Initialized pets array: [${pets.join(", ")}]`);  

// Loop through each pet  
for (let i = 0; i < pets.length; i++) 
    // Log the current pet  
    console.log(`Current pet at index ${i} is ${pets[i]}`);  
    
    // Check if the pet is a "dog"  
    if (pets[i] === "dog") {  
        console.log('Condition is met: This pet is a dog.');  
    } else {  
        console.log('Condition is not met: This pet is not a dog.');  
    }  
