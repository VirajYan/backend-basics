require('dotenv').config()
const express = require('express')
// import express from "express" another way to do it
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
       console.log(`Example app listening on port ${port}`)
})

//if doing from  env file
// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.port}`)
// })