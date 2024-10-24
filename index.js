const express = require('express')

const exp=express()

exp.get('/',(req,res)=>{
    res.send({"hai":"Hello"})
})

exp.listen('1234',(req,res)=>{
    console.log('Server started')
})