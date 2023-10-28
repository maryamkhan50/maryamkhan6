//javascript assignment 2
//practice exercise: 2.1
//variables
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
//type of variables
console.log("str1", typeof str1);
console.log("Str2", typeof str2);
console.log("val1", typeof val1);
console.log("val2", typeof val2);
console.log("myNum", typeof myNum);

//practice exersice 2.2
let myName = "Maryam khan"
let myAge = 18
let javascript = "true"
//log the code
console.log(`hello! My name is ${myName}. I am ${myAge} years old, I can code javascript: ${javascript}.`); 
//practice exersice 2.3
//hypotenuse of triangle
let A = prompt('input the value of base');
let B = prompt('input the value of perpendicular');
let e = 2;
let square = A ** e;
let square2 = B ** e;
let ans = A ** e + B ** e;
let g = 1;
let f = 2;
let squareroot =  g / f;
let hyp =  ans ** squareroot;
console.log(`hypotenuse ${hyp}`);
 
//practice exersice 2.4
let a = 12;
let b = 31;
let c = 67;
//add a and b
let result1 = b + a;
//divide a by c
let result2 = a / c;
//log results
console.log(result1, result2);


//chapter project
// Define a variable for the distance in miles
var distanceInMiles = 130;


// Convert miles to kilometers
var distanceInKilometers = distanceInMiles * 1.60934;

// Log the value in kilometers in the specified format
console.log(`The distance of ${distanceInKilometers.toFixed(4)} kms is equal to ${distanceInMiles} miles`);
//BMI calculator 
let heightInInches = 70; //for example 70 inches
let weightInPounds = 154; //for example 154 pounds
//convertion factors
let inchesToCentimeters = 2.54;
let poundsTokilos = 2.2046;
//converting values
let heightInCentimeters = heightInInches * inchesToCentimeters;
let weightInKilograms = weightInPounds / poundsTokilos;

//log the values
console.log(`Height: ${heightInInches} inches is equal to ${heightInCentimeters} cm`);
console.log(`Weight: ${weightInPounds} pounds is equal to ${weightInKilograms.toFixed(4)} kg`);
//see!It was easy
