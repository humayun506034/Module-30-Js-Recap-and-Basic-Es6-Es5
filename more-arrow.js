// 2 or multiple peramiter

const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

// single peramiter or one peramiter
const getAge = (person) => person.age;

const student = { name: 'humayun ', age: 20 }
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([3, 2, 1, 10, 3]);
console.log(third);

// no peramiter

const getPI = () => Math.PI;
console.log(getPI());

// large arrow function . if you want to get anything retuned from this function.then you have to use the return keyword .
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result=sum+mult;
    return result;
}


