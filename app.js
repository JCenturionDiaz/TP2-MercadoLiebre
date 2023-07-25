const express = require("express")

const app = express()
const path = require("path")
app.use(express.static("public"))

app.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000")
});

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get("/register", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/register.html"))
})

app.get("/login", function(req,res) {
    res.sendFile(path.join(__dirname,"/views/login.html"))
})