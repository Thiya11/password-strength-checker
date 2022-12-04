const express = require('express')
const bodyparser=require()
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.all('/*',function(req,res,next){
    res.header('Access-Control-Allow-Orign','*')
    res.header('Access-Control-Allow-Origin','GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allowed-Origin','Content-Type,Authorization,Content-Length,X-Requested-With')
    next()
})

app.post('/user',function(req,res){
    res.send(req.body)
})

app.listen(3000,(req,res)=>
console.log('listening port 3000'))

