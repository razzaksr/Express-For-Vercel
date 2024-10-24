const express = require('express')
const cors = require('cors')
const path = require('path');


const exp=express()
exp.use(cors())

exp.use(express.static(path.join(__dirname, '/app-ui/build')));

exp.get('/api/',(req,res)=>{
    res.send({"hai":"Hello"})
})

exp.listen('1234',(req,res)=>{
    console.log('Server started')
})