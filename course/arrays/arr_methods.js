//Chapter 12.6
//Array Methods

//shift method
//removes first element of array and return removed element
let arr = [1, 2, 3, 4];
let arrShift = arr.shift();
console.log(arr);
console.log(arrShift);


//unshift method
//adds element at the front of array and return length of the array
let arr1 = [1, 2, 3, 4];
let arrShift1 = arr1.unshift(0);
console.log(arr1);
console.log(arrShift1);

//Join method
//return array as string 
let arr2 = ['b', 'i', 'k', 'a', 'l'];
let arrJoin = arr2.join();
console.log(arr2);
console.log(arrJoin);

//slice method
//returns new array with sliced element
let arr3 = [1, 2, 3, 4, 5, 6];
let arrSlice = arr3.slice(2, 5);
console.log(arr3);
console.log(arrSlice);

//splice method
// adds or removes elements from array and returns removed elements in new array
//syntax = .splice(index of element, number of element to be removed, new element,new element)
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let arrSplice = arr4.splice(2,3,'a','b');
console.log(arr4);
console.log(arrSplice);
