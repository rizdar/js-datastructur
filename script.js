'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orederPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//split and join
console.log('aku+sedang+belajar+pemrogaman'.split('+'));
console.log('Rizki Darmawan'.split(' '));

const [firstName, lastName] = 'Rizki Darmawan'.split(' ');
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// const kapitalisasiNama = function (nama) {
//   const names = nama.split(' ');
//   const nameUpper = [];

//   for (const n of names) {
//     nameUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(nameUpper.join(' '));
// };

// kapitalisasiNama('rizki darmawan and vita afriani');
// kapitalisasiNama('desi dan rian');

const kapitalisasiNama = function (names) {
  const namaOrang = names.split(' ');
  const tampungNama = [];
  for (const n of namaOrang) {
    // tampungNama.push(n[0].toUpperCase() + n.slice(1));
    tampungNama.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(tampungNama.join(' '));
};

kapitalisasiNama('rizki darmawan and vita afriani.');

//paddng
console.log('Rizki'.padStart(20, '+').padEnd(30, '+'));
console.log('Siapa Aja'.padStart(15, '+').padEnd(30, '+'));

const maskNumber = function (number) {
  const str = number + '';
  const n = str.slice(-4);
  return n.padStart(str.length, '*');
};

console.log(maskNumber(1234567890));
console.log(maskNumber(8979878965746545));

//repeat
const message = 'Hallo.. Apa Kabar.. Kalian.. semua';
console.log(message.repeat(3));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'00'.repeat(n)}`);
};

planeInLine(5);
planeInLine(3);

// const airlane = 'TAP air Indonesia raya';

// console.log(airlane.toLocaleLowerCase());
// console.log('rizki'.toUpperCase());

// //fix capitalisation in name
// const passenger = 'rIzKi';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // comparing email
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //Replacing
// const priceUS = '$18.45';
// const priceID = priceUS.replace('$', 'IDR');
// console.log(priceID);

// const annountcement =
//   'All Passanger come to boarding door 23, Boarding door 23';

// console.log(annountcement.replaceAll('door', 'gate'));
// console.log(annountcement.replace(/door/g, 'gate'));

// //Booleans
// const plane = 'A320neo';
// console.log(plane.includes('A320'));

// //Practice exercise
// const checkBagage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You Not Allowed');
//   } else {
//     console.log('Welcome');
//   }
// };

// checkBagage('I Have a laptop, some food and pocket Knife');
// checkBagage('Snack and Camera');
// checkBagage('Knife and gun FOr protection');

// const saySomething = function (item) {
//   const kata = item.toLowerCase();
//   if (kata.includes('goblok') || kata.includes('bangsat')) {
//     console.log('Kata Katamu terlalu kasar');
//   } else {
//     console.log('Terimakasih ucapannya');
//   }
// };

// saySomething('Bangsat lo,,');
// saySomething('Goblok bangetttt,');
// saySomething('Terimakasih ya');

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);
// const trimedEmail = lowerEmail.trim();
// console.log(trimedEmail);
// const plane = 'A320';
// console.log(plane[0]);
// console.log(airlane.length);
// console.log(airlane.indexOf('r'));
// console.log(airlane.lastIndexOf('r'));

// console.log(airlane.slice(4));
// console.log(airlane.slice(4, 7));
// console.log(airlane.slice(0, airlane.indexOf(' ')));
// console.log(airlane.slice(airlane.lastIndexOf(' ') + 1));
// console.log(airlane.slice(-2));
// console.log(airlane.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are Middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('Yo got the middle seat');
//   } else {
//     console.log('ehehhehe');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// //1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2
// gameEvents.delete(64);

// //3
// console.log(
//   `an event happened, on average, every ${90 / gameEvents.size}. minutes`
// );

// //4
// for (const [min, events] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${events}`);
// }

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct...'],
//   [false, 'Try Again..'],
// ]);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
// }

// const answer = Number(prompt('Your Answer'));

// console.log(question.get(question.get('correct') === answer));

// //convert map to array
// console.log([...question]);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Itali');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest.get(arr));
// console.log(orderSet);
// console.log(new Set('Rizki'));
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// //1
// const players = game.scored.entries();
// for (const [i, player] of players) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// //2
// const odds = Object.values(game.odds);
// let average = 0;

// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
//3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// const odd = Object.values(game.odds);

// function calcAverage(nilai) {
//   for (let i = 0; i < nilai; i++) {

//   }
//   // return
// }

// calcAverage(odd);

// for (let i = 0; i < odd.length; i++) {
//   let average = (odd[i] )/ odd.length;
//   console.log(average);
//   // let average = odd[i] / 3;
//   // console.log(average);
// }

// for(let i = 0; i < )

// Properties Name
// const properties = Object.keys(openingHours);
// let openStr = `we are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr += `${day},`;
// }

// console.log(openStr);

// //Property values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire Object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';

//   console.log(`on ${day}, we open at ${open}`);
// }

// //Method
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// //arrays
// const users = [
//   {
//     name: 'Rizki',
//     emai: 'hello@rizki.com',
//   },
// ];
// console.log(users[1]?.name ?? 'Tidak ada bos');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

// console.log([...menu.entries()]);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Thiago', 'Couthino', 'Peeriscic'];
// // console.log(players1Final);

// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// //6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandoski', 'kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7

// team1 < team2 && console.log('team 1 more likely to win');
// team1 > team2 && console.log('team 2 more likely to win');

// const rest1 = {
//   name: 'Capri',
//   numGuest: 0,
// };

// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuest = rest1.numGuest || 10;
// // rest2.numGuest = rest2.numGuest || 10;

// // rest1.numGuest ||= 10;
// // rest2.numGuest ||= 10;

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
// console.log('---------OR---------');
// console.log(3 || 'rizki');
// console.log(undefined || '' || null || 'hello');

// console.log('----------------------------AND--------------------');
// console.log(0 && 'rixki');
// console.log('vita' && 'rizki');

// console.log('hello' && 23 & null & 'jonas');

//Spread because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

//REST, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);
// //bjects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) Function
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(1, 2);
// add(1, 2, 3, 4, 5, 6);
// add(1, 3, 4, 7, 6, 4, 3, 8, 5, 3);

// restaurant.orederPizza('kankung', 'timun', 'tomat', 'sawi', 'garam');

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Soto Ayam'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables : arrays, string, map, sets but not object
// const str = 'Rizki';
// const letters = [...str, '', 'D'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 2?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Ciputat halimun 88',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'dimana ya kira kira',
//   starterIndex: 1,
// });

// ////////////////////////////////////////////////////////

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //muttating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //nestd object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const [x, y, z] = arr;

// console.log(x, y, z);
// let [main, , , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // return   2 receive values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested distrcturing
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //defalult values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
