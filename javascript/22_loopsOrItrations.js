// Loops or Itrations

// 1. Switch Case
const month = "emergency"
switch (month) {
    case "jan":
        console.log("lets start new year on 31 st eve");
        break;
    case "feb":
        console.log("lets start new year");
        break;
    case "march":
        console.log("lets start new year");
        break;
    case "april":
        console.log("lets start new year");
        break;
    case "may":
        console.log("lets start new year");
        break;
    case "june":
        console.log("lets start new year");
        break;
        case "july":
            console.log("lets start new year");
            break;
        case "august":
            console.log("lets start new year");
            break;
        case "septembe":
            console.log("lets start new year");
            break;
        case "october":
            console.log("lets start new year");
            break;
        case "november":
            console.log("lets start new year");
            break;
        case "december":
            console.log("lets start new year");
            break;
        default:
            console.log("disasters dont look for month");
            break;

}
// Falsy Value :-  false , 0 ,-0 ,bigInt 0, "" ,null , undefined, NAN, [],{} ,function()

// For Loop
// syntex of For Loop
for (let index=0;index<10;index++){
    const element = index ;
    console.log(element);
}

// example-1 for loop

for(x=0; x<10; x++){
    console.log(`outer loop ${x}`)
    for(y=0; y<=5; y++){
       // console.log(`innerloop ${y} and inner loop ${x}`)
       console.log(x +'*' +y +'='+x*y)
    }
} 

//EX-2 Array

let fruits = ['mango','kiwi','strawberry','mullberry','rasberry']
console.log(` welcome to the juicy world  ${fruits.length} `)
for(let index=0; index<fruits.length ; index++){
    const x =fruits[index]
    console.log(`i love to eat ${x}`)
}
//Break Keyword

for (let index=0;index<10;index++){
    if(index==5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of i ${index}`);
}
//Continue Keyword

for (let index=0;index<10;index++){
    if(index==5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i ${index}`);
}

