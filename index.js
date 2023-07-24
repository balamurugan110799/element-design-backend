const express = require("express")
const db = require("./config/db")
const Router = require("./router/router")   
const bodyParser = require("body-parser")
var cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/api",Router)
app.listen(8000,()=>{
    console.log("Port is Running")
    
})
