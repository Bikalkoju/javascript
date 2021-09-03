//Chapter 11
//Block Scope

//Block scope means that the variable inside the block is only available within the curly braces ({}).
//Block refers to the curly braces ({}) of an if statement, a function, or a loop.

//Example 1
const mysticForest = () => {
  let road = 'Secret passage';
  console.log(road);
};

mysticForest();
console.log(road);          //output: road is not defined


//Example 2
const mysticForest = () => {
  let road = 'Secret passage';
  let territory = 'Arctic region';
  if (territory === 'Arctic region') {
    let road = 'Lost the track?';   
    console.log(road);                      //output: Lost the track?
  }
}
mysticForest();
console.log(road);                          //output: road is not defined

//Example 3
const iceBlocks = () => {
  let x = 10;
  console.log(x);
  for (let x = 0; x < 20; x++){
    console.log(x);
  }
};

iceBlocks();
console.log(x);                             //reference error