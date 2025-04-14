function returnPromise(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve("resolvedoo")
    }, 2000);
  })
}
console.log(returnPromise());
console.log("other");
