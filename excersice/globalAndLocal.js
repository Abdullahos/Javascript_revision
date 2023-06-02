function foo() {
    let x = (y = 0);    //y is global becuase of this format, but x is local(block scope)
    x++;        //x : 1, y : 0    
    y++;        //x: 1, y: 1
    return x;   //1
  }
  
  console.log(foo(), typeof x, typeof y);   //1, undefined, number