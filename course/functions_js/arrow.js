//Chapter 10.4
//Arrow Syntax

//Declaring function using arrow syntax
const getSquare = (num) => {
    return num * num;
};
console.log(getSquare(5));

//if there is only one parameter, parenthesis can be removed
const getCube = num => {
    return num * num *num;
};
console.log(getCube(2));

//single line block function does not need {} and return value automatically
const getPowFour = num => num * num *num *num;
console.log(getPowFour(2));