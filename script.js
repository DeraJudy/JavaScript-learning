// Objective:
// Write a JavaScript program that calculates and displays the letter grade based on a 
// student's numeric score.

const userScore = parseInt(prompt('Enter Your Score 1 - 100'));
console.log(userScore);

if (isNaN(userScore) || userScore < 1 || userScore > 100) {
    alert("Invalid input. Your Score should be between 1 and 100");
    // return;
} else{
    if (userScore >= 90 && userScore <= 100){
        alert("Your grade is A. Excellent");
    } else if (userScore >= 80 && userScore <= 89){
        alert("Your grade is B. Very Good");
    } else if (userScore >= 70 && userScore <= 79){
        alert("Your grade is C. Average");
    } else if (userScore >= 60 && userScore <= 69) {
        alert("Your grade is D. Pass");
    } else if (userScore >=0 && userScore <= 59){
        alert("Your grade is F. Repeat Class");
    } else{
        alert("Invalid Input");
    }
}
// OR
if (userScore >= 90) {
    alert("Your grade is A.");
} else if (userScore >= 80) {
    alert("Your grade is B.");
} else if (userScore >= 70) {
    alert("Your grade is C.");
} else if (userScore >= 60) {
    alert("Your grade is D.");
} else {
    alert("Your grade is F. Repeat Class");
}


// Challenge: Leap Year Checker
// Objective:
// Write a JavaScript program that checks if a given year is a leap year.


const year = parseInt(prompt("Enter a year:"));

if (isNaN(year)) {
    alert("Invalid input. Please enter a valid year.");
} else {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                alert(year + " is a leap year.");
            } else {
                alert(year + " is not a leap year.");
            }
        } else {
            alert(year + " is a leap year.");
        }
    } else {
        alert(year + " is not a leap year.");
    }
}

// Challenge: Simple ATM Withdrawal System
// Objective:
// Write a JavaScript program that simulates a simple ATM withdrawal process.

const balance = 1000;
const withdrawAmount = parseInt(prompt("Enter the amount you wish to withdraw:"));

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

const choice = parseInt(prompt("Select an option (1-5):\n1. View Profile\n2. Edit Profile\n3. Delete Profile\n4. Logout\n5. Help"));

switch (choice) {
    case 1:
        alert("You have selected 'View Profile'.");
        break;
    case 2:
        alert("You have selected 'Edit Profile'.");
        break;
    case 3:
        alert("You have selected 'Delete Profile'.");
        break;
    case 4:
        alert("You have selected 'Logout'.");
        break;
    case 5:
        alert("You have selected 'Help'.");
        break;
    default:
        alert("Invalid choice. Please select a valid option from the menu.");
}

const day = parseInt(prompt("Select an option (1-7):\n1. Monday\n2. Tuesday\n3. Wednesday\n4. Thursday\n5. Friday\n6 Saturday\n7 Sunday"));

switch (day) {
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("Wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
    alert("Saturday");
    break;
  case 7:
    alert("Sunday");
    break;
  default:
    alert("Invalid day");
}


const operation = parseInt(prompt("Select an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

switch (operation) {
    case 1:
        const sum = num1 + num2;
        alert("Result: " + sum);
        break;
    case 2:
        const sub = num1 - num2;
        alert("Result: " + sub);
        break;
    case 3:
        const Multiplication = num1 * num2;
        alert("Result: " + Multiplication);
        break;
    case 4:
        if (num2 === 0) {
            alert("Error: Division by zero is not allowed.");
        } else {
            const division = num1 / num2;
            alert("Result: " + division);
        }
        break;
    default:
        alert("Invalid Operation. Please enter a number between 1 and 4.");
}

// this is an arrow function
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5