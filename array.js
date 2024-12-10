
// // let numbers = [1,2,3,4,5];
// // console.log (numbers);

// let fruits =['Apple','Banana','Grape'];
// console.log (fruits)


// console.log(fruits[1]);
// fruits[1]='Cherry';
// console.log(fruits[1]);
// console.log (fruits);

// fruits.push ('melon');
// console.log (fruits);
// console.log (fruits.length);

// let x
// for (x in fruits){
//     console.log (fruits[x]);
// }
// for (x of fruits){
//     console.log (x);
// }


let fruits = ['Apple','Banana','Lemon'];
console.log (fruits);

fruits.pop();
console.log (fruits);


fruits.shift();
console.log (fruits);

fruits.push('Melon');
console.log (fruits);

fruits.unshift('Pineapple');
console.log (fruits);

delete fruits [1];
console.log (fruits);

fruits [1]='Orange';
console.log (fruits);


fruits.splice(1,2);
console.log (fruits);

fruits.push('Melon');
console.log (fruits);

let myArray=fruits.slice(1,2);
console.log (fruits);


let newAr=[1,2,3];
let secOnd = [4,5,6];

let arrayTest = newAr.concat (secOnd,fruits);
console.log (arrayTest);


