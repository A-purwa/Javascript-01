'useStrict' /* treat all js code as newer version */
console.log(3+3)

let name = 'Apurwa';
let num = 123456 ;
let boolian = true;
let A = null ; //stand alone value 
let B = undefined ; // variable is not defined, means we didn't provided a value to it
let symbol  // we used it for adding uniqueness 

let id = Symbol('123')
let anotherID = Symbol('123')
console.log(id===anotherID)     //output:- false ,because symbol adds uniqunes to values
// object 
 
console.log(typeof num)
console.log(typeof 'apurwa')

// NonPremitive DataTypes arrey, object ,function

// Arrey 
let veggies = ['bhindi','matar','tamatar','loki','aalu']
//object : it is made up of keyvalue pairs
let myObj = {
    name :'appu',
    age : 16,
    gender : 'female'
}
//Function : it consist logic for performing some task

let myFun = function(){
    console.log('Hello World')
}

console.log(typeof veggies)
console.log(typeof myObj)
console.log(typeof myFun)

let bignum = 2345678n
console.log(typeof bignum)
