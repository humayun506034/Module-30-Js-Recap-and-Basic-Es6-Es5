const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

console.log(glass);
const keys = Object.keys(glass);
const values = Object.values(glass);
// console.log(keys);
// console.log(values);

// array of array , two dimentional array
const entries = Object.entries(glass);
// console.log(entries);

delete glass.isCleaned;
//  console.log(glass);

const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);

Object.freeze(glass);
glass.source = 'Bangladesh';
console.log(glass);