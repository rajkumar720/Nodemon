const express=require('express')
const path=require('path')
const app=express();
 app.get(express.static(path.join(__dirname,'public')))
app.get('/rj',(req,res)=>{
    console.log(req.query)
    res.send('the sever is responsed')
})
 app.get('/thunder/v1/user/',(req,res)=>{
    console.log('this is the raj');
 }) 
 app.get('/public',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','rj.png'
    ))
 })
app.listen(8080,()=>{console.log('this is the express');})