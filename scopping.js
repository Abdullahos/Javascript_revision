//scoping

let var1 = 1;
var var2 = 2;
const var3 = 3;
let fn = ()=> {
    let var1 = 1.1;
    console.log(var1);
}
fn();

fn = ()=> {
    var var2 = 2.1;
    console.log(var2);
}
fn();

fn = ()=> {
    const var3 = 3.1; 
    console.log(var3);
}
fn();
console.log(var3);

let regFn = function() {
    if (true) {
        let x = 1;
        var y = 0;
    }
    console.log(y)  //var is function scope
    console.log(x)  //let is block scope
}
regFn();

