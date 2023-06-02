function myFun(x, y, ...manyMoreArgs) {
    console.log(manyMoreArgs);
  }
    
  myFun(1, 2, 3, 4, 5);
  myFun(1, 2);
  
  // the default value for the rest param is []