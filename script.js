// Objective:
// Write a JavaScript program that calculates and displays the letter grade based on a 
// student's numeric score.

// const userScore = parseInt(prompt('Enter Your Score 1 - 100'));
// console.log(userScore);

// if (isNaN(userScore) || userScore < 1 || userScore > 100) {
//     alert("Invalid input. Your Score should be between 1 and 100");
//     // return;
// } else{
//     if (userScore >= 90 && userScore <= 100){
//         alert("Your grade is A. Excellent");
//     } else if (userScore >= 80 && userScore <= 89){
//         alert("Your grade is B. Very Good");
//     } else if (userScore >= 70 && userScore <= 79){
//         alert("Your grade is C. Average");
//     } else if (userScore >= 60 && userScore <= 69) {
//         alert("Your grade is D. Pass");
//     } else if (userScore >=0 && userScore <= 59){
//         alert("Your grade is F. Repeat Class");
//     } else{
//         alert("Invalid Input");
//     }
// }
// OR
// if (userScore >= 90) {
//     alert("Your grade is A.");
// } else if (userScore >= 80) {
//     alert("Your grade is B.");
// } else if (userScore >= 70) {
//     alert("Your grade is C.");
// } else if (userScore >= 60) {
//     alert("Your grade is D.");
// } else {
//     alert("Your grade is F. Repeat Class");
// }


// Challenge: Leap Year Checker
// Objective:
// Write a JavaScript program that checks if a given year is a leap year.


// const year = parseInt(prompt("Enter a year:"));

// if (isNaN(year)) {
//     alert("Invalid input. Please enter a valid year.");
// } else {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 alert(year + " is a leap year.");
//             } else {
//                 alert(year + " is not a leap year.");
//             }
//         } else {
//             alert(year + " is a leap year.");
//         }
//     } else {
//         alert(year + " is not a leap year.");
//     }
// }

// Challenge: Simple ATM Withdrawal System
// Objective:
// Write a JavaScript program that simulates a simple ATM withdrawal process.

const balance = 1000;
const withdrawAmount = parseInt(prompt("Enter the amount you wish to withdraw:"));


// console.log(newBalance);

if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Invalid Input. Please enter amount you want to withdraw");
} else {
    if (withdrawAmount >= balance) {
        alert("Insufficent Funds");
    } else if (withdrawAmount % 10 !== 0) {
        alert("Please enter an amount in multiples of 10.");
    } else {
        const newBalance = balance - withdrawAmount;
        alert("Transaction successful. Your new balance is " + newBalance + ".");
    }

}


