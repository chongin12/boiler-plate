const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://chongin12:abcd1234@boilerplate.pjgbv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log("error"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// chongin12 / abcd1234