// leran about this and arrow function in javascript 

//with this keyword you can refer current context

const user = {
    username:'appu',
    place:'Betul',
    welcomeMsg:function(){
        console.log(`${this.username}, welcome to ${this.place}`)   
        console.log(this)                   
    }
}
user.welcomeMsg()
console.log(this)    // it will give you empty arrey because outside the scope there is nothing to access 