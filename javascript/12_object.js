let mySymbol = Symbol("key1")

let userDetails = {
    name:"Apurwa",
    place:'Sarni',
    bloodGroup:'b +ve',
    grade:'A',
    age:16,
    email:'appu@google.com',
    IsLoggedIn:'false',
    [mySymbol]:'mykey1'                                   //Symbol ko humesha [] is bracket k ander rakhte hai ni to type of string dega vo ,yhi shi syntex hai symbolic value ko likhne ka
}
console.log(userDetails.name)
       // or you can print like below  
console.log(userDetails["age"])

console.log(userDetails.bloodGroup)
console.log(userDetails.IsLoggedIn)
console.log(userDetails.place)
console.log(userDetails[mySymbol])
console.log(typeof userDetails[mySymbol])
/*
userDetails.email = 'appu@microsoft.com'
Object.freeze(userDetails)      //freeze jaha pr laga hai uske bad us value ko change nhi hone dega
userDetails.email = 'appu@citybank.com'
console.log(userDetails.email)
console.log(userDetails)
*/

userDetails.greetings = function(){
    console.log("hi users,hope you are doing good")
}
console.log(userDetails.greetings())

userDetails.greetings2 = function(){
    console.log(`hiiiiiiiiiiiiiiii, ${this.name}`)

}
console.log(userDetails.greetings2())
