const express = require("express");
const nodemailer = require("nodemailer");
const port = process.env.PORT || 3000;
const app = express();


const sendMail = require("./Controller/controller");


app.get("/", (req, res)=>{
    res.send("you are in the home section | WELCOME");
})

app.get("/sendemail", sendMail); //on controller folder



app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})

