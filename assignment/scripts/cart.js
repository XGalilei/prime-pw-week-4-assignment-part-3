console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
  if(basket.length < maxItems) {
      basket.push(item);
      return true;
  }
  return false;
}

function listItems() {
  for(let item of basket) {
    console.log(item);
  }
}

function empty() {
  while(basket.length > 0) {
    basket.pop();
  }
}

function isFull() {
  return basket.length === maxItems;
}

function removeItem(item) {
  let itemIndex = basket.indexOf(item);
  if(itemIndex != -1) {
    return basket.splice(itemIndex,1);
  }
  else {
    return null;
  }
}

console.log(`Basket is ${basket}`);

console.log(`==Testing addItem==`);
console.log(`Adding apples (expect true)`, addItem('apples'));
console.log(`Adding milk`, addItem('milk'));
console.log(`Adding jalapenos`, addItem('jalapenos'));
console.log(`Adding peanut butter`, addItem('peanut butter'));
console.log(`Adding bread`, addItem('bread'));
console.log(`Adding candy to a full cart (expect false)`, addItem('candy')); //diet time
console.log(`==Testing listItems==`);
console.log(`Basket is now ${basket}`);

console.log(`==Testing removeItem==`);
console.log(`Removing milk (expect milk)`, removeItem('milk'));
console.log(`Basket is now ${basket}`);
console.log(`Removing candy when there's no candy (expect null)`, removeItem('candy'));

console.log(`==Testing empty==`);
console.log(`Emptying basket:`);
empty();
console.log(`Basket is now ${basket}`);
