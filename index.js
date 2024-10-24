const express = require('express')
const parser = require('body-parser')

const exp=express()

exp.get('/',async(req,res)=>{
    res.send({"hai":"Hello"})
})

exp.listen('1234',async(req,res)=>{
    console.log('Server started')
})