function getUp(){
    let username= 'appu'
    console.log(this.username)                           // this time 'this ' will give you 'undefined value coz it can not refer anything inside the funcion scope 
}
getUp()


const getUpAppu = function(){
    let username= 'apurwa'
    console.log(this.username)                           // this time 'this ' will give you 'undefined value coz it can not refer anything inside the funcion scope 
}
getUpAppu()

const getwellsoon =()=>{
    let username= 'appu'
    console.log(this.username)                           // this time 'this ' will give you 'undefined value coz it can not refer anything inside the funcion scope 
}
getwellsoon()
// note : you can not access this key word inside any of the function


/* you can write function with different styles */
/* TYPE-1 */
const greet = function(username){
    console.log(`hello dear ${username}` )
}
greet("apurwa")

/* Type-2     [implicit return : in which you dont need to write return keyword or you can say if you are using {} curly braces you have to write return keyword] */

const add =(num1,num2)=>num1+num2

//or 

const addtwo =(num1,num2)=>(numm1+num2)
console.log(addtwo(5,6))