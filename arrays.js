//////////////////////////////////////Declaration//////////////////////////////////////////////
// declare 1d array
let arr = [1,2,3,4];
console.log(arr[arr.length-1]);   //prints 4

//declare 2d array
let _2DArr = [[1,2],[2,3],[3,4]];
console.log(_2DArr[0][1]);  //prints 2

////////////////////////////////////Operations/////////////////////////////////////////////////

//slice(start, end) start and end are INCLUSIVE
//return the selected elements in NEW ARRAY (take care when using angualr (changesDetection will not work here))

let newArr = arr.slice(0, 1);   
console.log(newArr);    //[1], [] not 1, as it returns array not element
console.log(arr);   //[1,2,3,4] 
newArr = arr.slice();   //[1,2,3,4] 
console.log(newArr);

//splice.  (startIdx, counts?), if count not specified , then to end
// add/remove
// affect the original array (arr), and returns the removed/add item(s)
// angular can detect the changes

// removing
let removedItem = arr.splice(0,1);
console.log(removedItem);   // 1
console.log(arr);   // [2,3,4]

removedItem = arr.splice(); //do nothing
console.log(removedItem);   // []
console.log(arr);   // [2,3,4]


//adding
// note: i used the start index as arr.length to appending not to remove the last element
let addedArray = [5,6];
let changes = arr.splice(arr.length, 1,addedArray);
console.log(changes);
arr = arr.flat();
console.log(arr);


