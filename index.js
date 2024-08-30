import express from "express"

/* import connectdb from "./db/ConnectDb" */
import dotenv from "dotenv"

const app = express()

dotenv.config()

const PORT = 3000

app.get("/login", (req, res) => {


    const data = [
        {
            "name": "ashish",
            "age": "20"
        },
        {
            "name": "rahul",
            "age": "20"
        },
        {
            "name": "god",
            "age": "20"
        },
    ]
    res.send("login")
})
app.get("/signup", (req, res) => {
    res.send("signup")
})
app.get("/forgotpassword", (req, res) => {
    res.send("forgotpassword")
})
app.get("/otp", (req, res) => {
    res.send("otp")
})
app.get("/logout", (req, res) => {
    res.send("logout")
})
app.get("/data", (req, res) => {
    const data =
        [{
            "name": "ashish",
            "age": "22",
        },
        {
            "name": "rahul",
            "age": "22",
        },
        {
            "name": "anurag",
            "age": "22",
        }]
    res.send(data)
})



/* connectdb().then(() => {
    app.listen(8000, () => {
        console.log("server is connected at port 8000")
    })

}).catch((err) => {
    console.log("err", err)
}) */
app.listen(PORT, () => {
    console.log(`port running http:localhost:${PORT}`)
})


