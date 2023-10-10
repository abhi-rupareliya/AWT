async function loadModule(choice) {
  // based on condition it will load the module
  if (choice === "fruits") {
    const module1 = await import("./fuits.js");
    console.log(module1);
  } else if (choice === "colors") {
    const module2 = await import("./colors.js");
    console.log(module2);
  }
}

// Example usage
loadModule("fruits");
loadModule("colors");
