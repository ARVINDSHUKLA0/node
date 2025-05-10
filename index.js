const app = require('./app')
console.log("welcome to node js topic basic")
let a = 20
let b = 40
let c = 540

console.log(a+b+c)


// conditions of if and else

 let age = 7

 if(age >= 18){
   console.log("this is drive car")
 }
 else{
    console.log("this is not drive a car")
 }


 for(i = 0; i < 100 ; i++)
 {
    console.log(i)
 }

 const arr = [1, 2, 3, 5, 6,8]
 console.log("hit", arr)

 console.log(app.funName())


//  const fs = require('fs')

//  fs.writeFileSync("hello.text","welcome to node js file system")

 const fs = require('fs')
//  fs.writeFileSync("web.js", "this is node js file")
// console.log(__dirname)
console.log(__filename)


const http = require('http')
http.createServer((req, resp)=>{
   resp.write("<h1>this is arvind server </h1>")
   resp.end()

}).listen(4000)


 