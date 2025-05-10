 const http = require('http')
 http.createServer((req, res)=>{
    res.write("this is am first time working a node ")
    res.end()
 }).listen(500)