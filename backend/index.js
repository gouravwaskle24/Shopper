require("dotenv").config();
const express = require("express")
const session = require("express-session")
const server = express()

server.use(session(
    {
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, maxAge: 60000}
      }
))

server.get("/test", (req,res) => {
    req.session.test? req.session.test++ : req.session.test=1;
    res.send(req.session.test.toString())
})

server.listen(process.env.PORT, () => {
    console.log("server running at : ",process.env.PORT)
})