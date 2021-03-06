////////////////// PROBLEM 1 ////////////////////
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/

//CODE HERE
function helloWorld (firstArg){
  console.log(firstArg)
}

helloWorld("'Hello, World!'")

////////////////// PROBLEM 2 ////////////////////
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/

//CODE HERE

function printName (personsName){
  console.log(personsName)
}

printName("Cameron")

/*
function printName (firstName, lastName) {
  console.log(firstName, lastName)
}
printName('Tim', 'Washington')
*/

////////////////// PROBLEM 3 ////////////////////
/*
  Create a function called greeting that
  accepts name as its only parameter.
  Convert the name param into a string.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/

//CODE HERE

let firstName = "Jake";

function greeting(firstName) {
  console.log(firstName)
}

console.log(`'Hello, ${firstName}'`)



////////////////// PROBLEM 4 ////////////////////
/*
  Create a function called add that takes in two parameters 
  Inside, convert the arguments to be numbers (just in case strings get sent in)
  The add function should RETURN the two parameters added together.
  Create a variable outside the function called 'sum' and set it equal to add invoked (called), passing in 2 arguments.
*/

//CODE HERE

/*
function add (int1, int2){
  return int1 + int2
}
let nums1 = 5;
let nums2 = 6;

sum = add( nums1, nums2)
console.log(sum)
*/

function add (int1, int2){
  return int1 + int2
}
/* 
function add(x,y){
  x = Number (x)
   y = Number (y)
  Return x + y
  
}
let sum = add(1+2)
console.log(sum)
*/

////////////////// PROBLEM 5 ////////////////////
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' (with NAMEPARAM being the value of the name parameter being passed in).
  Create a variable called 'nameGreeting' and set it equal to your function invoked (called) passing in an argument.
*/

//CODE HERE

function nameCheck (nameparam){
  if (nameparam === "Steven"){
    console.log("What is up Steven"); //can use return instead of console.log//
  } else if ( nameparam === "Bryan") {
    console.log("Hey Bryan!");
  } else { //let nameParam = (name)//
    console.log(`Cool name, ${nameparam}`) //(`${name}`)//
  }
}



let nameGreeting = nameCheck("Daravy");
console.log(nameGreeting);



////////////////// PROBLEM 6 ////////////////////
/*
  Write a function called faveColorFinder that takes in one parameter called color (which will be a string).
  If the passed in color equals 'red', return 'red is a great color'
  If the passed in color equals 'green', return 'green is a solid favorite color'
  If the passed in color equals 'black', return 'so trendy'
  Otherwise, you should return the string 'you need to evaluate your favorite color choice'
  Create a variable called 'colorRating' and set it equal to faveColorFinder invoked (called), passing in an argument.
*/

//CODE HERE

function faveColorFinder (color) {
  if (color === "red"){
    console.log("red is a great color")
  } else if (color === "green") {
    console.log("green is a solid favorite color")
  } else if (color === "black"){
    console.log("so trendy")
  } else {
    console.log("you need to evaluate your favorite color choice")
  }
}  
faveColorFinder("black")
let colorRating = faveColorFinder()
console.log(colorRating)//methods come with parentheses that takes an argument//


////////////////// PROBLEM 7 ////////////////////
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']
/*
  Create a function called printAllNames that takes in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the `namesArr` array (above).
*/

//CODE HERE

function printAllNames(val ) {
  console.log(`${val}`);
}
namesArr.forEach(printAllNames)

////////////////// PROBLEM 8 ////////////////////
/*
  Create a function called thatsOdd that takes in a single argument (a number).
  Using conditional logic, if the number is even, return 'That's not odd!'
  Otherwise, return 'That is odd indeed!'
  Outside the function, create a variable called `oddChecker` and set it equal to your function invoked, making sure to pass in an argument.
*/

//CODE HERE

function thatsOdd (aNums) {
  if (aNums % 2 === 0) {
    console.log("That's not odd!")
  } else {
    console.log("That is odd indeed!")
  }
}

thatsOdd(44)

let oddChecker = thatsOdd(9)
console.log(oddChecker)

////////////////// PROBLEM 9 ////////////////////
let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107]
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr',  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. 
  Return the answers array inside of the function to a variable called `arrayEvaluator`.
*/

//CODE HERE

function bigOrSmall (arr) {
  let answers = ["big", "small"]
  if( arr <= 100){
    console.log("small")
  } else if (arr > 100) {
    console.log("big")
  }
}
bigOrSmall(50)

arrayEvaluator=bigOrSmall(600)

////////////////// PROBLEM 10 ////////////////////
//let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel'];//
//let loser = ['Glimmer'];//
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser string appears in the array, splice it out. Return the new contestants array.
*/

//CODE HERE


let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel'];
let loser = ['Glimmer'];


let namesToDelete = new Set(loser);

let newArr = contestants.filter((name) => {
  return !namesToDelete.has(name);
});


console.log(newArr);
/* while loop splice
function theEliminator (contestants, loser) {
  let i = 0; 
  while ( i > contestants.length){  //length here is a property of the contestant array(object)//
    if (contestants[i] === loser){
      contestants.splice(i,1)
    } else {
      ++i;
    }
  }
  return contestants;
}
console.log(theEliminator(contestants, loser))

*/
/* for loop splice
for (let i = 0; i < contestants.length; i++){
  if (contestants[i] == loser) {
    contestants.splice(i,1);
  }
}
console.log(contestants);
return contestants;

}

theEliminator(contestants, loser)

*/

////////////////// PROBLEM 11 ////////////////////
let sampleString = "Hi, my name is Kylo."
/*
  Write a function that takes in one argument, a string. The function should then console.log that string, in entirely uppercase characters.
  Invoke the function, passing in the sampleString (above).
*/

//CODE HERE

function example (str1){
  console.log(str1)
}

console.log(sampleString.toLocaleUpperCase())

////////////////// PROBLEM 12 ////////////////////
/*
  Write a function called emailCheck that takes in
  one parameter - email.
  Inside the function, convert the email param into 
  a string and trim off any excess whitespace.
  Check to make sure the email contains an '@' symbol.
  If it does, return 'email verified' and if doesn't, 
  return 'must provide a valid email address'
*/

let email = "darav  y@ "      
function emailCheck (email) {
  //email = String.email;//
  //email = String.email.trim();//
  if (email.includes("@")){
    console.log("email verfied")
  }else {
    console.log("must provide a valid email address")
  }
  
}

emailCheck(email)
////////////////// PROBLEM 13 ////////////////////
/*
  Write a function, naming it whatever you believe to be appropriate, that buys as many chocolate frogs as possible with a certain amount of gold. Each chocolate frog costs 3 gold. Your function should take in a single parameter, which is the amount of gold you are willing to spend. Your function should return a total amount of chocolate frogs you were able to purchase.
  Create a variable called `totalFrogs` and set it equal to your function invoked, passing in the amount of gold you are willing to spend.
*/


//CODE HERE

function calculateChocolateFrogs (amtOfGold){
    amtOfGold *= 3
    return amtOfGold
}
let totalFrogs = calculateChocolateFrogs(12)
console.log(totalFrogs)

////////////////// PROBLEM 14 ////////////////////
/*
  You might have noticed a slight bug in problem 12. If you were to pass in 4 gold, the function would return to you 1.3333... However, you can't really go to a store and by 1.333 products. You would just be able to purchase 1 product. Re-write the function you used in problem 12 (give it the same name, just add a 2 to the end of it) that fixes this bug. Invoke the function and store the returned value to a variable called `totalFrogs2`.
*/

//CODE HERE

function calculateChocolateFrogs (amtOfGold){
  amtOfGold *= 3
  amtOfGold += 2
  return amtOfGold
}

let totalFrogs2 = calculateChocolateFrogs(12)
console.log(totalFrogs2)

////////////////// PROBLEM 15 ////////////////////
let sampleArray = [0,1,2,3,4,7,5,6,8,9]
/*
  Write a function that takes in an array of numbers as an argument. In the body of the function, write logic to determine if the array is in ascending order. The function should return true, if it is sorted in ascending order, false if it is not. Create a variable, `arrayIsAscending` and set it equal to your function invoked. Use the sample array to test this function.
*/
/*
function checkArrayAscending (arr) {
if (sampleArray)
}*/

function checkArrayAscending (arr) {
    let arrTrueFalse = true;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i] + 1) {
        arrTrueFalse = false;
      }
    }
    return arrTrueFalse;
}

console.log(checkArrayAscending(sampleArray))
/*
another method
let arrTrueFalse = arr[0]
for (let i =1; i <arr.length -1; i++)
if (arr[i] <= arrTrueFalse){
  return false
} else {
  arrTrueFalse = arr [i]
}
} 
return true
}
let arrayisAscending =checkArrayAscending(sampleArray)
console.log(arrayisAscending)

another method
function checkArrayAscsending(arr){
let unsorted =JSON.stringify(arr)
let sorted = JSON.stringify(arr.sort(funtions(a,b){return a - b}))
if (sorted === unsorted){
  console.log('true')
} else {
  console.log('false')
}
}

checkArrayAscending(sampleArray)
*/

/* Writing steps out with Marcus
1. write a function
2. in the body of the function, write a logic
3. in ascending order
4. if it is in ascending order return true
5. if not return false
6. create a variable named arrayIsAscending andn set it 
7. use the simple array to test this function

*/
//CODE HERE


////////////////// PROBLEM 16 ////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck", "rubberDuck", "sailorDuck", "realDuck"]

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["rubberDuck", "sailorDuck"]

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["sailorDuck"]

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["realDuck"]