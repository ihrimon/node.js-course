// module.exports
// require
import { add, subtract, divide } from "./first-module.js";

console.log(add(10, 20));

try {
  console.log("trying to divide by zero");
  let result = divide(0, 10);
  console.log("result", result);
} catch (error) {
  console.log("caught an error", error.message);
}
