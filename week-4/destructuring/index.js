// Write a function that takes an array as an argument and returns a new array containing all of the items that are in the array that was passed in but in reverse order. This function should

// leave the original array unchanged

// contain no loops of any kind. That includes for, for...in, for...of, while, and do...while

// not call slice or any other method on the original array

// not call push or concat on any array in any way
let person = ["Priscila", 29, "Brazil"];
const reverseArray = (person) => [...person].reverse();

// let newArray = [];
// const add = function () {
//     newArray = person.reverse();
//     return newArray;
// };
console.log(reverseArray(person));
console.log(person);

// Write a function that takes two arrays as arguments and returns a new array containing all of the items in the two arrays passed to it. This function should

// leave the original arrays unchanged

// contain no loops of any kind. That includes for, for...in, for...of, while, or do...while

// not call slice or any other method on the two arrays passed to it

// not call push or concat on any array in any way

// function joiningArray(...arr1, ...arr2) {
//     var joinedArray = [...arr1, arr2];
//     console.log(joinedArray);
// }
// joiningArray();
const joiningArray = (arr1, arr2) => [...arr1, ...arr2];

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(joiningArray(arr1, arr2));
console.log(arr1);
console.log(arr2);

// function logInfo(city) {
//     const name = city.name;
//     const country = city.country;
//     const numPeople = city.population;

//     console.log(
//         `${name} is in ${country} and has ${numPeople} inhabitants in it.`
//     );
// }

const city = {
    name: this.name,
    country: this.country,
    population: this.population,
};

const logInfo = function ({ name, country, population }) {
    console.log(name + ", " + country + ", " + population);
};

logInfo({ name: "Marseille", country: "France", population: 861635 });

// Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.

//  let getNameAndCountry = ({ name, country }) => [name, country];

//  let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//      let [, country] = getNameAndCountry(city2);
//      return {
//          ...city1,
//          country,
//      };
//  };

function getNameAndCountryN({ name, country }) {
    return [name, country];
}
function getRelocatedCityN(city1, city2) {
    if (city2 < 0) {
        city2 = { country: "Germany" };
    }
    let newCity = city1.split("");
    // let [, country] = getNameAndCountry(city2);
    return newCity, city2;
}

getRelocatedCityN("brasil");

// let getNameAndCountry = ({ name, country }) => [name, country];

// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country,
//     };
// };

// console.log(getRelocatedCity("berlin", { country: "Brasil" }));
