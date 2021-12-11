const express = require('express')
const app = express()
const PORT = 3001

const fs = require('fs')
const path = require('path')
const pathToFile = path.resolve('./data.json')

const getResources = () => JSON.parse(fs.readFileSync(pathToFile))

console.log(pathToFile)

app.get("/", (req, res) => {
    res.send("Hello World")
    console.log("From the code")
})

app.get("/api/resources", (req, res) => {
    const resources = getResources()
    console.log(resources)

    res.send(resources)
})

app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT)
})
