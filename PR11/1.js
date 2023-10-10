function fetchData(callback) {
  setTimeout(() => {
    const data = {
      fruit: "orange",
      quantity: 3,
      price: 100,
      ordered_on: "2020-5-10",
    };

    callback(null, data); // Pass null as it is not actual error
  }, 500);
}

function cb(error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data);
  }
}

console.log("Starting....");
fetchData(cb);
console.log("End.");
