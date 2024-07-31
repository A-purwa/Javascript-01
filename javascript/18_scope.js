var a = 90;

if (true){
    let a =80
    const c =70   
    console.log("thie is inner a which stands for block scope", a)
}
console.log("this outer a which stands for globel scope",a)

//ex : lets take an example of function inside function
if(true){
    const username ="Apurwa"
    if(username=='Apurwa'){
       let website = 'instagram'
       console.log(website + username)
    }
    console.log(username)
   // console.log(website)   you can not access website here because it is out side the scope
}
// console.log(username) you can not access username here because that is block scopic variable


/* Learn different behaviour of function based on how we declare it  */
// TYPE-1
console.log(addOne(5))
function addOne(num){
    return num+1
}

//TYPE-2
     //console.log(addTwo(8))         so here you can not access num before declaring it like you are doing in above syntex
const twice = function addTwo(num){
    return num + 2
}
// addTwo(8)