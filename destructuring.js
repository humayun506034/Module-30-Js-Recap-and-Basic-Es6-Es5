const student = {
    name: 'Humayun',
    age: 20,
    phone: '01747477746',
    money: 12124542415421
}

/*
const phone=student.phone;
const name=student.name;
const age=student.age;

*/ // OR

// if right side is an object left side of destructuring will be object as well 
//use property name as a variable that contains the property value
const { phone, age } = student; // etar mane phone ar age name ea duita veriable er modhe object er property er value ta thakbe

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

console.log(age);
console.log(age);
console.log(age);
console.log(age);
console.log(age);

// array destructuring 

const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 15];

// advanced
function doubleThem(a, b) {
    return [a * 2, b * 2];
}
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);