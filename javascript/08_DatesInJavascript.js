const myDate =new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.getMonth())
console.log(myDate.getDay())
console.log(Date.now())   //gives you the time value in mili seconds
console.log(Math.random(Date.now()/1000))    //when we multiply Date.now with 1000 it will convert value from mili seconds to seconds

const myCreatedDate =new Date ('01-23-2024')
console.log(myCreatedDate.getTime())