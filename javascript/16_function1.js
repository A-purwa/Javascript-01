// types to write or call a function
// type1

function addnum (num1,num2){
console.log(num1+num2)
}
addnum(3,5)

//type2

function addition (num1 ,num2){
    console.log(num1+num2)
}
const result = addition(8,10)
console.log('Result',result)

//type3

function addsome(num1,num2){
    let result1 = num1 + num2
    return result1
}
const result1 = addsome(88,100)
console.log('Result1',result1)

//type4

function addsomenum(num1,num2){
    console.log(num1+num2)
    return num1+num2
}
addsomenum(88,1000)

//type5

function loginUserMessage (username) {
return `I ${username} just logged in`
}
console.log(loginUserMessage("Apurwa"))

// if else  (after using return keyword no code will work ,that is the final statement)

function loginUserMessagee (username) {
    if(username===undefined){
        console.log("there is no user")
        return
    }
    return `user ${username} just logged in`
    }
    loginUserMessagee()