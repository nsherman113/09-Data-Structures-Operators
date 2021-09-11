'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // ES6 enhanced function structure
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    // console.log(
    //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} !`
    // );
  },
  orderPasta: function (ing1, ing2, ing3) {
    // console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  },
};

// ! The Nullish Coelescing Operator

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// ! Short circuiting

// console.log(3 || 'Noah');
// console.log('' || 'Noah');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('-------AND---------');

// console.log(0 && 'Noah');
// console.log(7 && 'Noah');

// console.log('hello' && 23 && null && 'Noah');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// ! Rest Pattern

// 1) destructuring

// const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

// * objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2)  functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  // console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(2, 3, 5, 9, 8);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// ! The Spread Operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// * using the spread operator instead of bad example above

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(arr);

// * useful example of spread operator

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// * copy array
const mainMenuCopy = [...restaurant.mainMenu];
//  * join two arrays
// const menu = [...restaurant.starterMenu, ...mainMenuCopy];
// console.log(menu);

// * iterables - using spread operator on everything but objects
const str = 'Noah';
const letters = [...str, 'S.'];
// console.log(letters);

// *objects

// const ingredients = [
//   prompt("Let/'s make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// * Objects (since ES2018, we are actually able to use the spread operator with objects)

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'SHERM' };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// ! Destructuring Objects

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// * default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// * mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// * nested objects

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// ! Destructuring arrays

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// destructuring the array, not an another array.
// const [x, y, z] = arr;
// console.log(x, y, c);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// * Changing variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// *

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//  Default Values
// const [p, q, r = 1] = [8, 9];
// console.log(p, q, r);

//

// ! The for-of loop (new way of looping in ES6)

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu)

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  // console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

// ! Optional Chaining

// pre ES2020
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With optional trainging ES2020

// console.log(restaurant.openingHours?.mon?.open);

// example

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(`on ${day}, we are open at ${open}`);
}

// methods

// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// Arrays

const users = [{ email: 'noah@sherm.com' }];

// console.log(users[0]?.name ?? 'User array empty');

// if(users.length > 0) console.log(users[0].name); else console.log('user array empty');

// ! Looping objects: Object Keys, Values, and Entries

// Property names
const properties = Object.keys(openingHours);
// console.log(properties);

let openString = `we are open on ${properties.length} days:`;
for (const day of properties) {
  openString += `${day},`;
}
// console.log(openString);

// Property values
const values = Object.values(openingHours);
// console.log(values);

// Entire object

const entries = Object.entries(openingHours);
// console.log(openingHours);

for (const [key, { open, close }] of entries) {
  // console.log(`On ${key} we open at ${open} and close at ${close}` );
}

// ! Sets

const ordersSet = new Set([
  'pasta',
  'pizza ',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

// console.log(ordersSet);
// console.log(new Set(['Noah']));

// console.log(ordersSet.size);

// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('pickles'));

ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
ordersSet.delete('risotto');
// ordersSet.clear();

// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

const staff = ['waiter', 'cashier', 'chef', 'manager'];
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['waiter', 'cashier', 'chef', 'manager']).size);

// ! Mapping

const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'Firencze, Italy');
console.log(rest.set(2, 'Lisben, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));

console.log(rest.has('categories'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

// ! Working with strings 1

const airline = 'RYANAIR Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('R'));
console.log(airline.lastIndexOf('R'));
console.log(airline.indexOf('portugal'));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ') + 1));

console.log(airline.slice(-5));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else console.log('You did not get the middle seat!');
};
checkMiddleSeat('11C');
checkMiddleSeat('11B');
checkMiddleSeat('11E');
