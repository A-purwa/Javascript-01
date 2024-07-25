const obj1 ={1:'a',2:'b'}
const obj2 ={3:'c',4:'d'}
const obj3 ={5:'e',6:'f'}
 // there are three types by which you can combine those object into single object and most usefull technique to do that is SPREAD OPERATOR

// const obj4 ={obj1,obj2,obj3}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}

console.log(obj4)

const users = [
    {
        id:101,
        email:'appu@123.com'

    },
    {
        id:102,
        email:'chhabu@123.com'
    }
]
console.log(users[0].email)
console.log(users)
console.log(Object.keys(users))
console.log(Object.values(users))
console.log(Object.entries(users))