/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));



/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age){
    if(age>=18){
        return `is adult`
    }

    else if(age>=0){
        return `is Minor`
    }

    else{
        return `Error, check input`
    }
}

console.log('Exercise 2 Result:', isAdult(150));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(letter){
    if(letter==='a' ||letter==='e' ||letter==='i' ||letter==='o' ||letter==='u'){
        return 'true'
    }

    else{
        return false
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail= (yourName,domain) => `${yourName}@${domain}`
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"))


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/


const greetUser = (hisName,time) => {
    time= time.toLowerCase()
    let timeCheck=time==`morning`||time==`afternoon` ||time==`evening`
    if(timeCheck==true){
    return `Good ${time}, ${hisName}!`
    }
    else{
        return "Enter a valid day time (morning, evening, afternoon)"
    }

}
console.log('Exercise 5 Result:', greetUser("Sam", "Morning"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(num1,num2,num3){


    if(typeof(num1)!="number" || typeof(num2)!="number" || typeof(num3)!="number" ){
        return "check your inputs"
    }
    else if(num1>num2 && num1>num3){
        return `${num1} is the largest number`
    }

    else if(num2>num1 && num2>num3){
        return `${num2} is the largest number`
    }
    
    else{
        return `${num3} is the largest number`
    }
}

console.log('Exercise 6 Result:', maxOfThree(61, 100, 81));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/


const calculateTip = (amount,precentage) => (amount*precentage)/100
console.log('Exercise 7 Result:', calculateTip(100, 25));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temp,unit){
    if(unit.toUpperCase()==="C"){
        return temp*(9/5)+32 + " Fahrenheit"
    }

    else if(unit.toUpperCase()==="F"){
        return (temp-32)*(5/9) + " Celcius"
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "f"));
