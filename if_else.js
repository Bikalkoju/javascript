// if else statement
var num1 = 10, num2 = 20;
if (num1 >= num2) {
    console.log(num1 + " is greater than " + num2);
} else {
    console.log(num1 + " is smaller than " + num2);
}

//nested if else
//check where a year is a leap year
var year = 2021;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("The Year "+ year + " is  a leap year");
        } else {
            console.log("The Year "+ year + " is not a leap year");
        }
    } else {
        console.log("The Year "+ year + " is  a leap year");    
    }
} else {
    console.log("The Year "+ year + " is not a leap year");
}


//else_if statement
var area = "circle";
var pi = 3.142, l = 5, b = 3, r = 4;

if (area == "square") {
    console.log("The area of the square is " + (l * l));
} else if (area == "rectangle") {
    console.log("The area of the rectangle is " + (l * b));
} else if (area == "circle") {
    console.log("The area of the circle is " + (pi * r * r));
} else {
    console.log("Please enter a  valid data.");
}