// promise
// 3 states : Pending , resolved , rejected
function promiseFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}

promiseFunc()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
