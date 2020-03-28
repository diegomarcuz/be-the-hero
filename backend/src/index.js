const express = require("express")
const cors = require("cors")

const routes = require("./routes")

const app = express()

app.use(cors())
app.use(express.json()) // all the request body will be on json format
app.use(routes)


app.listen(3333);