const express = require("express")

const configDB = require("./config/config")
const userRouter = require("./routes/userRoute")
const app = express()



require('dotenv').config({ path: './config/.env' })

configDB()

const User = require("./models/User")

app.use(express.json())
app.use("/api",userRouter)


app.post("/api/add",async(req,res) => {
try {
const {name,lastName,email,phone} = req.body
    const newUser = new User({name,lastName,email,phone})
await newUser.save()
res.status(201).send(newUser)
} catch (error) {
res.status(500).send(error.message)
    }
    
})


const PORT = process.env.PORT || 5000
app.listen(PORT,err => err ? console.error(err) : console.log(`Server is running on port ${PORT}`))





















