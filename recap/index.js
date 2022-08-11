//1st challenge 
//create two variables , firstName and lastName , concatenatr them into a third variable called fullName
//log it out

// firstName = "Majid"
// lastName = "Kargar"
// fullName = firstName + " " + lastName
// console.log(fullName)

// 2nd challenge 
// log out both variables into a function

// let name = "Majid"
// let greeting = "Hi there"

// function welcome() {
//     let welcomeMassegae = greeting + "," + name + "!"
//     console.log(welcomeMassegae)
// }

// welcome()

//3rd challange

// let myPoints = 0

//create two funtions add3Ponints() and removalPoint() and have them
//add/remove points to/from myPoints variable 

// function add3Ponints(){
//     myPoints += 3
// }
// function removalPoint(){
//     if (myPoints > 0){
//         myPoints -= 1
//     }
// }

//call the funtions to that the line below logs out 10

// add3Ponints()
// add3Ponints()
// add3Ponints()
// add3Ponints()
// removalPoint()
// removalPoint()
// console.log(myPoints)

//4th challenge 
//try to predict what each of the lines will log out

// console.log("2" + 2) // "22"
// console.log(11 + 7) // 18
// console.log(6 + "5") // "65"
// console.log("MyPoints: " + 5 + 9) // "MyPoints: 59"
// console.log(2 + 2) // 4
// console.log("11" + "14") // "1114"

//5th challenge
//When the user clicks the purchace button , render out
// "Something went wrong, please try again" in the paragragh
// which has the id of "error"

// let errorEl = document.getElementById("error-el")
// function error(){
//     errorEl.textContent = "Something went wrong, please try again"
// }

//6th challenge
//create 4 funtions: add(), subtract(), divide(), multiply()
//call correct functins when user clicks the buttons
//render the resualt of the calculation in the paragraph with id="sum-el"


let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result

}

function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}


function divide(){
   
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}


function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

