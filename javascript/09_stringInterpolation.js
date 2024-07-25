const name = 'Apurwa'
const repoCount = '50'

/*old technique to concadinate the string  */

console.log( 'my name is '+ name +' '+'and my count is'+' '+ repoCount )

/*New technique to concadinate string */

console.log(`my good name is ${name} and my repo count is ${repoCount}`)

/*String and its various methods */

const gameName = new String('ApuRwA')
console.log(gameName[0])
console.log(gameName[3])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.lastIndexOf('apurwa',0))
console.log(gameName.substring(1,4))
console.log(gameName.replace('u','8'))
console.log(gameName.includes('ApuRwA'))

const insomnia = 'its been days,I did not take sleep for more then 4 hours'
word =insomnia.split('')
console.log(word[5])