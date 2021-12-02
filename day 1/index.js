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