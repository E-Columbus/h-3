/**
* eliminar del objeto result la propiedad role 
* 
* 
* output => {
    id:100,
    name:"foo",
};
*/

let result = {
    id:100,
    name:"foo",
    role:"admin"
};

/* SOLUTION 1 */
delete result.role

/* SOLUTION 2

delete result["role"]; */

/* SOLUTION 3
var property = "role";
delete result[property]; */

console.log(result) 
 
//export result
module.exports = result; 