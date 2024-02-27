const max = Math.max(10, 20, 25, 45, 30);
console.log(max);


// array er number type element er modhe max value ber kora

const numbers = [10, 20, 25, 45, 30, 55, 45];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax);

// use spread operator to copy
const nums=[4, 5, 8, 9];
const nums2=nums;
const nums3=[...nums];
console.log(nums3);
nums.push(10);
console.log(nums3);
console.log(nums);


// advance

const numb=[...nums, 555]; //add extra elements while copy
console.log(numb);