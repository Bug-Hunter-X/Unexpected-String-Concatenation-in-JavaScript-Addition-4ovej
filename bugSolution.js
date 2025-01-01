```javascript
function myFunction(a, b) {
  //Convert both inputs to numbers before adding them
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  //Handle NaN cases
  if(isNaN(a) || isNaN(b)){
    return 0;//Or handle error as you see fit.
  }
  return a + b; 
}

console.log(myFunction(5, '5')); // Outputs 10
console.log(myFunction('hello',5));//Outputs 0
```