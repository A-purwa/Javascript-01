const myArrey = [2,5,6,22,3,1,7,'hero','superman']
console.log(myArrey[5])
myArrey.push(121)
myArrey.unshift(6)
console.log(myArrey)
myArrey.shift()
console.log(myArrey.includes('superman'))
console.log(myArrey.indexOf(22))
const newOne= myArrey.join()
console.log(myArrey)
const myn1 = myArrey.splice(1,3)
console.log('a',myn1)

const myn2 = myArrey.slice(3,6)
console.log('b',myn2)

const newArrey = myArrey.push(888)
console.log(myArrey)
console.log(typeof newOne)

/*Arrey Methods */
// console.log(myArrey.pop())
// console.log(myArrey.push(111))
