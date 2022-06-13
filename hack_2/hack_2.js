/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/

let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

// EXTRA VARIABLES
var len = arr.length

// LOOP
for (let index = 0; index < len; index++) {
    result.push(Object.values(arr[index]));
}

// REMOVAL
result.shift()
result.pop()

/* SOLUTION 1 - FLAT */
result = result.flat() 

/* SOLUTION 2 - REDUCE - CONCAT
result = result.reduce((x, y) => x.concat(y), []) */

/* SOLUTION 3 - CONCAT - APPLY
result = [].concat.apply([], result) */ 

/* SOLUTION 4 - REDUCE - SPREAD OPERATOR
result = result.reduce((x, y) => [...x, ...y]) */

console.log(result) 

//export result
module.exports = result;