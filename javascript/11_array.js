let marvel_heros = ["ironman",'thor','spiderman']
let dc_heros = ["flash",'batman','superman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) 

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)

// output=[ 'ironman', 'thor', 'spiderman', [ 'flash', 'batman', 'superman' ] ]this is considering 2nd arrey as a complelete element this is the problem ,even concating will give you the same

let all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)

// output = [ 'ironman', 'thor', 'spiderman', 'flash', 'batman', 'superman' ] using spread operator (...) we resolved problem given above

let new_arrey = [1,5,9,[8,2,9],9,5,1,[8,5,2,[96,25,63]]]   //if you want to write all elements in a single arrey with 'Flat method' you can do this
let fresh_arrey = new_arrey.flat(Infinity)
console.log(fresh_arrey)


console.log(Array.isArray("Apurwa"))
console.log(Array.from("Apurwa"))        // with using from you can convert it into arrey whatever you have objects arrey anything
console.log(Array.from({name:'appu'}))    //isko apko bolna hoge key value pair k case mai ,ki key value pair ka arrey bnao ya values ka arrey banao nhi to ye 'from' apko empty array dega[]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))     //output : [ 100, 200, 300 ]


