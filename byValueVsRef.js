//permitive by value
let x = 1;
let y = x;

console.log(x,y);
y = 2;
console.log(x,y);

//objects by ref

let a = {
    name: 'ali'
}
let b = a;

console.log(a, b);
b.name = 'alaa';
console.log(a, b);

