// higher order fn: function that take a function as arg or/and return function
let firstOrder = () => {
    console.log("hosted");
}

let higherOrder = (firstOrder) => {
     firstOrder();
}
higherOrder(firstOrder);