const faker = require('faker');
const strings = require('./strings.js');

const name = faker.name.findName();

console.log(name);
console.log(strings.lowercase(name));
console.log(strings.upercase(name));