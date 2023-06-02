const { get } = require("http");

//Arrow Functions
let multiplyFn = (a,b) => a * b;
console.log(multiplyFn(3,2));

let name = 'Ali';

let printNameArrowFn = () => {
    console.log(this.name); //undefined
}
printNameArrowFn();

let objWithRegularFn = {
    name: 'Mohsen', 
    fn:function(){
        console.log(this.name)
    }
}
objWithRegularFn.fn();     //Mohsen 

let objWithArrowFn = {
    name: 'Ramy',
    fn: ()=> {
        console.log(this.name);
    }
} 
objWithArrowFn.fn();//undefined


// Recap: this in regular fn refers to the hosting, but in arrow function referes to the global object
//arrow functions CAN'T BE USED AS CONSTRUCTOR OR WITH NEW