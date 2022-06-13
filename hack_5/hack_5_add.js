/**
* agregar al objeto result la propiedad role 
* 
* 
* output => {
    id:100,
    name:"foo",
    role:"admin"
};
*/

let result = {
    id:100,
    name:"foo",
};

let role = "admin";

/* SOLUTION 1 */
result.role = role

/* SOLUTION 2 
result["role"] = "admin" */

/* SOLUTION 3
result.role = "admin" */

console.log(result) 

//export result
module.exports = result; 