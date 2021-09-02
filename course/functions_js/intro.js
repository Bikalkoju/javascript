//Chapter 10.1
//Function Declaration


//normal function
function isReading() {              //declaring function
  console.log('He is reading');  
};

isReading();                        //calling the function

//anonymous function or function expression
const square = function (num) {
  return num * num;
};
console.log(square(12));