// JavaScript only hoists declarations, not initialisation
let regFn = function() {
    console.log(y)  //var is hoisted(not initialized, so undefined)
    console.log(x)  //let isn't (error)
    let x = 1;
    var y = 0;
    }
regFn();