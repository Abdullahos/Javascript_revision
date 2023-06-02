let x  = 0.3;
let y = 0.1 + 0.2;
console.log(x === y);
console.log(0.1 + 0.2 === 0.3);

// This is due to the float point math problem. Since the floating point numbers are encoded in binary format, the addition operations on them lead to 
// rounding errors. Hence, the comparison of floating points doesn't give expected results


console.log(1 < 2 < 3); //1<2<3 -> (true (1) < 3)   true 
console.log(3 > 2 > 1); //3>2>1 -> true>1 -> false