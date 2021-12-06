const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// Print the price of each product using forEach
products.forEach((product) => {
  console.log(product);
});
// Print the product items as follows using forEach
const productItems = products.forEach((product) => {
  Number.isInteger(product.price)
    ? console.log(`The price of ${product.product} is ${product.price} euros`)
    : console.log(`The price of ${product.product} is unknown`);
});

// Calculate the sum of all the prices using forEach
const productSum = () => {
  let sum = 0;
  products.forEach((product) => {
    Number.isInteger(product.price) ? (sum += product.price) : (sum += 0);
  });
  return sum;
};
console.log(productSum());

// Create an array of prices using map and store it in a variable prices
const priceTags = () => {
  const newArr = [];
  const prices = products.map((product) => {
    return newArr.push(product.price);
  });
  return prices, newArr; //pricec->27 newArr->[3, 6, NaN, 8, 10, NaN] so go for newArr
};

console.log(priceTags());

// Filter products with prices
const filterPrice = () => {
  const filter = products.filter((product) => {
    return Number.isInteger(product.price);
  });
  return filter;
};
console.log(filterPrice());

// Finding the sum of the prices using map
const mapPrice = () => {
  sum = 0;
  products.map((product) => {
    Number.isInteger(product.price) === true
      ? (sum += product.price)
      : (sum += 0);
  });

  return sum;
};
console.log(mapPrice());

// using filter method to finds the sum of the prices
const filterPriceSum = () => {
  let sum = 0;
  products.filter((product) => {
    Number.isInteger(product.price) === true
      ? (sum += product.price)
      : (sum += 0);
  });
  return sum;
};
console.log(filterPriceSum());

// Find the average price using reduce
const redPriceSum = () => {
  return products.reduce(
    (initialValue, product) =>
      Number.isInteger(product.price) //so no need for the equality operator
        ? initialValue + product.price
        : initialValue + 0,
    0
  );
};
console.log(redPriceSum());

// Find the first product which doesn't have a price value
const noPriceValue = () => {
  return products.find((product) => !Number.isInteger(product.price));
};
console.log(noPriceValue());

// Find the index of the first product which does not have price value
const noPriceValueIndex = () => {
  return products.findIndex((product) => !Number.isInteger(product.price));
};
console.log(noPriceValueIndex());

// Check if some products do not have a price value
const somePriceValue = () => {
  return products.some((product) => !Number.isInteger(product.price));
};
console.log(somePriceValue());

const everyPriceValue = () => {
  return products.every((product) => Number.isInteger(product.price));
};
console.log(everyPriceValue());



// CODEWAR CRUISE LOL

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
function squareDigits(num) {
  let myArr = num.toString().split('');
  let newArr = myArr.map(function (x) {
    return x * x;
  });
 return newArr.join(''); 
}

console.log(squareDigits(9119));


// for (var x = 0; x < 2; x++) {
//   for (var y = 0; y < 10; y++) {
//     console.log("x: " + x + ", y: " + y);
//   }
// }

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
function getSum(a, b) {
  //Good luck!
  let sum = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      console.log(i);
      sum += i;
    }
  } else {    // a > b
    for (let i = b; i <= a; i++) {
      console.log(i);
      sum += i;
    }
  } return sum;
}
console.log(getSum(-3, 0));

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2) {
  // Code
  if (Number.isInteger(value1) && Number.isInteger(value2)) {
    if (operation === "+") {
      return value1 + value2;
    } else if (operation === "-") {
      return value1 - value2;
    } else if (operation === "*") {
      return value1 * value2;
    } else if (operation === "/") {
      return value1 / value2;
    }
  } else {
    if (!Number.isInteger(value1)) {
      return `warning ${value1} is not an integer`;
    } else if (!Number.isInteger(value2)) {
      return `warning ${value1} is not an integer`;
    } else {
      return false;
    }
  }
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){
  sum =0
  
   numbers = numbers.map(number=>number*number)
  for(i=0;i<numbers.length; i++){
    sum+=numbers[i]
  }
  return sum;
}