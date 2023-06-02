let promiseMaker = async () => {
    return new Promise(
        async (resolve) => {
          setTimeout(() => {
            resolve("I'm a Promise!");
          }, 1000);
        },
        (reject) => {}
      );
  }
  let callAsync = async function() {
    await promiseMaker()
    .then(() => console.log("fulfilled"))
    .catch(() => console.log("error"))
    .finally(() => console.log("end"));
    
    console.log("wait");
  }
  callAsync();
console.log("no wait");