/**
* modificar los valores de las propiedades (name y role) del objeto result, 
* name -> capital,
* role -> upper
* 
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/

let result = {
    id:100,
    name:"foo",
    role:"admin"
};

/* SOLUTION 1 */
result.name = "Foo"
result.role = "ADMIN"

/* SOLUTION 2
result["name"] = "Foo"
result["role"] = "ADMIN" */

/* SOLUTION 3
result.name = `${result.name.charAt(0).toUpperCase()}oo`
result.role = `${result.role.toUpperCase()}` */

/* SOLUTION 4
result = {...result, name: "Foo", role: "ADMIN"} */

/* SOLUTION 5
result = Object.assign({}, result, {name: "Foo"}, {role: "ADMIN"}); */

console.log (result) 

//export result
module.exports = result; 