let score = "33abc"//null//undefined//true//"yash"

console.log(typeof (score));//object//undefined//boolean//string
console.log(typeof score);//object//undefined//boolean//string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//number//number//number//number
console.log(valueInNumber);//0//NaN//1//NaN

// "33"=> 33
// "33abc" => NaN
//true => 1; false=>0

let isLoggedIn = 1//""//"yash"

let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn);//true//false//true

//1 => true;0 =>false
//"" =>false
//"yash" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)