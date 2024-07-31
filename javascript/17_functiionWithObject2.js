//spread operator or Rest operator it gives you the result in array
function calculateCartPrice(...price){
    return price
}
console.log(calculateCartPrice(5,55,555))

function numbers(val1,val2,...num){
    return num
}
console.log(numbers(100,200,300,400,500,600,700,800,900))

//How to pass object in function

const user = {
    userName:'Apurwa',
    place :'Sarni'
}
function handleObject(anyobject){
  return   `my name is  ${anyobject.userName} and i live in ${anyobject.place}`
}
console.log(handleObject(user))

// function with array
//ex 1
const newArray =[100,200,300,400,500,600]

function returnSecondValue(getArray){
    return getArray
} 
console.log(returnSecondValue(newArray))

//ex2

function returnSecondValueplz(getnewArray){
    return getnewArray[1]
} 
console.log(returnSecondValueplz([200,300,400,500,600]))
