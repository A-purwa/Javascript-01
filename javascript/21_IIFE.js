// IIFE : Immediately invoked function expressions (it is used to stop pollution created by globel scope variable or other declarations made in globel scope)
(
function chai(){
    console.log('chai time guys')
})();

((coffee)=>{console.log(`i would like to have ${coffee}`)})('esspresso');