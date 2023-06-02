//defualt param for not passing value or passing undefined
function checkType(num = 1) {
    console.log(typeof num);
  }
  
  checkType();
  checkType(undefined);
  checkType("");
  checkType(null);
