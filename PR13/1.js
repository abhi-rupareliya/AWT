import fetch from "node-fetch";

const api = "https://dummyjson.com/product/1";
const func = async () => {
  // returning the promise for the data
  return new Promise((resolve, reject) => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });
};

// fetching the data
func()
  .then((data) => console.log(data)) // success
  .catch((err) => console.log(err)); // error handling
