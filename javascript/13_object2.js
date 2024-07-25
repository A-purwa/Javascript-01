// let tinderuser = new Object(),                this is single turn object
let tinderuser = {}                          // this is mutiturn object both will give you {} in return
 tinderuser.id = 101
 tinderuser.name = 'APPU'
 tinderuser.place ='sarni'
 tinderuser.marks = 100

console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

let userDetails = {
    name:"Apurwa",
    place:'Sarni',
    bloodGroup:'b +ve',
    grade:'A',
    age:16,
    email:'appu@google.com',
    IsLoggedIn:'false',
    fullName:{
           userfullname :{
            firstname:'Apurwa',
            lastname:'Warathe'
           } 
        }
    }                                 //Symbol ko humesha [] is bracket k ander rakhte hai ni to type of string dega vo ,yhi shi syntex hai symbolic value ko likhne ka

    console.log(userDetails.fullName.userfullname.firstname)