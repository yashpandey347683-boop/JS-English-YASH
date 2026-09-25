//PRIMITIVE

//7  Types : String,Numbers,Null,Boolean,undefined,symbol,BigInt

const score = 100
const scorevalue = 103.3

const IsLoggedIn = false
const outsidetemp = null
let useremail;
console.log(useremail);

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id==anotherid);
console.log(id===anotherid);
const bigNumber = 34567654378954n

//reference or non-primitive

//Arrays, //Objects,Functions

const heros = ["yash","prince","robin","shaurya"];
let myObj = {
    name = "pandey",
    age = 19,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber )
console.log(typeof Symbol )
console.log(typeof myFunction )
console.log(typeof heros )
console.log(typeof anotherid )
console.log(typeof scorevalue )