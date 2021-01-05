function perform(value) {
  console.log(value);
  const param = 1;
  console.log(param);
  return param;
}

const myPromise = function() {
  this.allFunc = [];
  this.lastResult;
}
myPromise.prototype.then = function (newFunc) {
  this.allFunc.push(newFunc);
}
myPromise.prototype.resolve = function (arg) {
  this.lastResult = arg;
  for(let i = 0; i < this.allFunc.length; i++) {
    const item = this.allFunc[i];
    const res = item(this.lastResult);
    if (res instanceof myPromise) {
      const lastFuncs = this.allFunc.slice(i+1);
      res.allFunc = lastFuncs;
      break;
    } else {
      this.lastResult = res;
    }
  }
}

const foo = new myPromise();

foo.then((param)=>{
  console.log(++param);
  return param;
});
foo.then((param)=>{
  console.log(++param);
  return param;
})
foo.resolve(perform(20));