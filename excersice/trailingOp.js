let [x, y, ...z] = [1,2,3,4,5]
console.log(x, y, z);   //1,2,[3,4,5]

// NOTE: the trailing operatior must be the last thing in the definition: 
// let [x, ...y, z] = [1,2,3,4,5];  //syntax error
