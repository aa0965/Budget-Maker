const express = require('express')
const path = require('path')
const app =express()
const ppath = path.join(__dirname, '..', '/public')
app.use(express.static(ppath))
app.get('*',(req,res) => {
  res.sendFile(path.join(ppath,'index.html'))
})
const port = process.env.PORT||3000
app.listen(port,()=>{
  console.log('server is up')
})
