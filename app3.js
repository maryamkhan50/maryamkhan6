//exersice 3.1
// Create a shopping list array with 3 items
var shoppingList = ["Milk", "Bread", "Apples"];

// Check the list length and output it to the console
console.log("Original shopping list length: " + shoppingList.length);

// Update "Bread" to "Bananas" using the splice method
var indexOfBread = shoppingList.indexOf("Bread");
if (indexOfBread !== -1) {
  shoppingList.splice(indexOfBread, 1, "Bananas");
}

// Output the entire updated list to the console
console.log("Updated shopping list: " + shoppingList);
//exersice 3.2
let shoppingLIst = [ ]
shoppingLIst.push("Milk")
shoppingLIst.push("bread")
let lengthOfShoppingLIst = shoppingLIst.push("Apples")
console.log(shoppingLIst)
//updating "bread" to "bananas"
shoppingLIst.splice(indexOfBread, 1,"Bananas", "Eggs")
//removing last item
shoppingLIst.pop()
console.log(shoppingLIst)
//sorting the list
shoppingLIst.sort()
console.log(shoppingLIst)
let indexOf = shoppingLIst.indexOf("Milk")
//output the index of milk
console.log(indexOf)
//adding Carrots and Lettuce
shoppingLIst.splice(1, 0, "Carrots", "Lettuce")
//creating new a new list
let newList = ["juice", "Pop"]
shoppingLIst.push(...newList)
shoppingLIst.push(...newList)
//getting the last index value
let lastIndex = shoppingLIst.length - 1;
console.log(lastIndex)

//Exersice 3.3
//array with values 1, 2, and 3
let originalArray = [1, 2, 3];
//nesting array
let nestedArray = [originalArray, originalArray, originalArray];
// output the value
console.log(nestedArray[1][1]);

//Exersice 3.4
//creating variable 
var myCar = {
    make: "Nissan",
    model: "maxima",
    year: 2023,
    color: "super black",
    isAutomatic: true,
    mileage: 12.8,
    isElectric: false,
    owners: ["Renault Group"],
    features: ["Air Conditioning", "Power Windows", "Bluetooth Connectivity"]
};
var newProperty = "color"; // Create a variable to hold the property name

// Use the variable within square bracket notation to assign a new value to the "color" property in myCar
myCar[newProperty] = "Blue"; // Assign a new color to the car

console.log(myCar.color); // Output the updated color
//assign a new property 
newProperty = "forsale";
myCar[newProperty] = true;
//output new property
console.log(myCar.forsale);
//output make and model
console.log("Make:", myCar.make); 
console.log("Model:", myCar.model);
// Output the value of "forSale" property
console.log("For Sale:", myCar.forsale); 
//exersice 3.5
var people = {
  friends: []
}
var friend1 = {
  firstName: "Sarah",
  lastName: "Johnson",
  id: 12345
};

var friend2 = {
  firstName: "Michael",
  lastName: "Smith",
  id: 67890
};

var friend3 = {
  firstName: "Emily",
  lastName: "Brown",
  id: 54321
};
people.friends.push(friend1, friend2, friend3)
//output the object
console.log(people)
//chapter project
//Manipulating the Array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
theList.shift();
theList.pop();
theList.unshift("FIRST");
theList.splice(4, 3, "hello World" );
theList.splice(2, 2, "MIDDLE");
theList.push("LAST");
//output the list
console.log(theList);
//Company product catalog
// Creating an array
const inventory = [];

//three items with properties (name, model, cost, and quantity)
const item1 = {
    name: "remote controls",
    model: "A123",
    cost: 10.99,
    quantity: 100
};

const item2 = {
    name: "vibrators",
    model: "B456",
    cost: 24.95,
    quantity: 50
};

const item3 = {
    name: "dryer",
    model: "C789",
    cost: 4.99,
    quantity: 200
};

//Add all three objects to the main array
inventory.push(item1, item2, item3);

//Access the quantity element of the third item and log it to the console
const thirdItemQuantity = inventory[2].quantity;
console.log("Quantity of the third item:", thirdItemQuantity);

// Add and access more elements
const item4 = {
    name: "blender",
    model: "D012",
    cost: 8.49,
    quantity: 75
};

inventory.push(item4);

// Access and log the updated inventory
console.log(inventory);
//end of chapter 3 exersices and chapter project...




 
