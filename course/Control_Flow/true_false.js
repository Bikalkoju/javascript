//Chapter 9.2
//true and false

//false statement
/*
0 and -0
false
"" and ''   //empty strings
null
undefined
not a number(NAN)
*/

//true statement
/*
'0'             //string containing a single zero
'false'         //string containing text false
[]              //empty array
{}              //empty object
function(){}     //empty function
*/

let isNotSick = 0;
if (isNotSick) {
    console.log("I am sick");
} else {
    console.log("I am not sick");   //output
}

let isSick = '0';
if (isSick) {
    console.log("I am sick");       //output
} else {
    console.log("I am not sick");
}

// ! is used to reverse the statement
let isFull = true;
if (!isFull) {
    console.log('Eat some fruits');
} else {
    console.log('Drink some water');    //output
}