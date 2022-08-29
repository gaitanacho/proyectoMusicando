const express = require ("express")
const mysql= require("mysql")
const myconn = require ("express-myconnection")

const routes = require ("./routes")


const app = express()
app.set("port", process.env.PORT || 3002)
const dbOptions = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "abc123",
    database: "musicando"
}




// middlewares -----------------------------
app.use(myconn(mysql, dbOptions, "single"))

// rutas -----------------------------------
app.get("/", (req, res)=>{
    res.send ("Bienvenido a Musicando")
})

app.use("/api", routes)

// servidor corriendo ----------------------
app.listen(3002, ()=>{
    console.log("Servidor corriendo en el puerto", 3002)
})