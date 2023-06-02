let arr = [1,2,NaN];
console.log(arr.indexOf(NaN)); //-1

// indexOf use strict equal ===, and NaN === NaN always false
// instead u can use: findIndex or includes

console.log(arr.findIndex(Number.isNaN));   //2
console.log(arr.includes(NaN));


//NaN comparasion in Set is differenet
let set = new Set();
set.add(0).add("0").add("+0").add("-0").add(NaN).add(NaN).add(+0).add(-0*-0).add(-0)
console.log(set);

// in set: 
// all NaN are equal
// +1 === 1 != +'1'


