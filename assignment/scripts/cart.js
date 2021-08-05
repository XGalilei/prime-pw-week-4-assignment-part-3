console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
  basket.push(item);
  return true;
}

function listItems() {
  for(item of basket) {
    console.log(item);
  }
}

function empty() {
  while(basket.length > 0) {
    basket.pop();
  }
}

console.log(`==Testing addItem==`);
console.log(`==Testing listItems==`);

console.log(`==Testing empty==`);
console.log(`Emptying basket:`);
empty();
console.log(`Basket is now ${basket}`);
