/**
* agregar los skills del objeto foo al array result, 
* mediante la funcion map 
*
* output => ["javascript", "html", "css", "python", "flask", "react", "redux"]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin",
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"]
};

let result = [];

/* SOLUTION 1 */
result = foo.skills.map(function(x){
  return x
}) 

// LOOP - USED FOR SOLUTIONS 2-5 | COMMENT 1ST SOLUTION ALTOGETHER FOR THEM TO WORK
result.map(function(x){
  return x
}) 

/* SOLUTION 2 - FLAT
result.push(foo.skills)
result = result.flat() */

/* SOLUTION 3 - REDUCE - CONCAT
result.push(foo.skills)
result = result.reduce((x, y) => x.concat(y), []) */

/* SOLUTION 4 - CONCAT - APPLY
result.push(foo.skills)
result = [].concat.apply([], result) */

/* SOLUTION 5 - REDUCE - SPREAD OPERATOR
result.push(foo.skills)
result = result.reduce((x, y) => [...x, ...y]) */

console.log(result) 

//export result
module.exports = result; 