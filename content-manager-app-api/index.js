const express = require('express')
const app = express()
const PORT = 3001

app.get("/", (req, res) => {
    res.send("Hello World")
    console.log("From the code")
})

app.get("/api/resources", (req, res) => {
    res.send("Hello Resources")
})

app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT)
})
