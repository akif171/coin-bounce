const express = require("express")
const app = express()
const connectDB = require("./database/index")
const { PORT } = require("./config/index")
const router = require("./routes/index")
const errorHandler = require("./middlewares/errorHandler")
const cookieParser = require("cookie-parser")


app.use(cookieParser())

app.use(express.json())
app.use(router)

connectDB()

app.use(errorHandler)

app.use("/storage", express.static("storage"))


app.listen(PORT, console.log(`server is running on port: ${PORT}`))