function perform(value) {
  console.log(value);
  const param = 1;
  console.log(param);
  return param;
}

new Promise(function (resolve, reject) {
  resolve(perform(20));
}).then((result, a, b) => {
  console.log(++result);
  return result;
}).then(result => {
  if (result === 2) {
    console.log(++result);
    return result;
  }
})