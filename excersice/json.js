console.log(
    JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] })
); 
// function, Symbol, undefined -> null or ommited
   

