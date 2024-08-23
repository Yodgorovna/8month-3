"use strict";
//////////////HOMEWORK 1///////////////////
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
const numberToCheck = 30;
if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} tub son.`);
}
else {
    console.log(`${numberToCheck} tub son emas.`);
}
//////////////HOMEWORK 2///////////////////
function isPrime2(n) {
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
    if (n % 2 === 0 || n % 3 === 0)
        return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0)
            return false;
    }
    return true;
}
const users2 = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Bobo" },
    { id: 3, name: "Cholpon" },
    { id: 4, name: "Dilshod" },
    { id: 5, name: "Elmurod" },
    { id: 6, name: "Farrux" },
    { id: 7, name: "Gulnoza" },
];
const primeUsers2 = users2.filter((user) => isPrime2(user.id));
console.log(primeUsers2);
const users3 = [
    { id: 1, name: "Ali", salary: 500 },
    { id: 2, name: "Bobo", salary: 600 },
    { id: 3, name: "Cholpon", salary: 700 },
    { id: 4, name: "Dilshod", salary: 800 },
];
const totalSalary = users3.reduce((acc, user) => acc + user.salary, 0);
const mainUser = { id: 5, name: "Elmurod", salary: totalSalary };
console.log(mainUser);
//////////////HOMEWORK 4///////////////////
const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10, 10];
const uniqueNumbers = numbers.filter((num, index, arr) => arr.indexOf(num) === arr.lastIndexOf(num));
console.log(uniqueNumbers);
const users5 = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Bobo" },
    { id: 3, name: "Cholpon" },
    { id: 2, name: "Dilshod" },
    { id: 4, name: "Elmurod" },
    { id: 5, name: "Farrux" },
    { id: 3, name: "Gulnoza" },
];
const uniqueUsersMap = new Map();
users5.forEach((user) => {
    if (!uniqueUsersMap.has(user.id)) {
        uniqueUsersMap.set(user.id, user);
    }
});
const uniqueUsers = Array.from(uniqueUsersMap.values());
console.log(uniqueUsers);
