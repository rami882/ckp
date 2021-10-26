const mongoose = require("mongoose");

const configDB = async() => {
     try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db Connected")
     } catch (error) {
         console.error(error)
     }

}

module.exports = configDB