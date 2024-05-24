const express = require("express")
const cors = require("cors")

require("dotenv").config()
require("./Database/db")

const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME
console.log(process.env)
const app = express()
app.use(cors())
app.use(express.json())

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`)
})