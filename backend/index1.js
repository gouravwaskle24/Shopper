require("dotenv").config();

const express = require("express")
const bodyParser = require("body-parser");
const { urlencoded } = require("express");
const logger = require("morgan")

const server = express()
server.use(bodyParser.urlencoded())

server.use(express.static(process.env.STATIC_FOLDER))

server.use((req,res,next) => {
    console.log(req.ip, req.method, req.path)
    next()
})

server.use(logger())


// req data through params /college/:name/:city
server.get("/college/:name/:city", (req,res) => {
    const name = req.params.name;
    const city = req.params.city;

    res.json({name,city})
})

// req data through query /person?name&age
server.get("/person",(req,res) => {
    res.json({name:req.query.name,age:req.query.age})
})

server.get("/bottle",(req,res) => {
    let x = req.query.brand;
    res.json({brand:x})
})

server.listen(process.env.PORT, () => {
    console.log("server started! at : ", process.env.PORT)
})


server.post("/person", (req,res) => {
    const name = req.body.name;
    const age = req.body.age;
    res.json({name,age})
})

server.get("/homepage",(req,res) => {
    res.json({name:"You started server"})
}) 