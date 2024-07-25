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
handleObject(user)