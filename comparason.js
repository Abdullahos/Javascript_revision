// compare only value
let _10num = 10;
let _10string = '10';
console.log(_10num == _10string);   //true
//compare value && type
console.log(_10num === _10string);   //false

null == undefined // true
null === undefined // false

console.log([]==[] ||  []===[]) //false, refer different objects in memory
console.log({}=={} || {}==={}) //false, refer different objects in memory

console.log(1==true);   //true
console.log(1 === true); //false

