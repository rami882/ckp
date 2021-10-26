const User = require("../models/User")
const addUser = async(req,res) => {
    try {
        const {name,lastName,email,phone} = req.body
        const newUser = new User({name,lastName,email,phone})
        await newUser.save()
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const getUsers = async (req,res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getOneUser = async (req,res) => {
    try{
        const id = req.params.id 
        const user = await User.findById(id)
        res.status(200).send(user)
    }
    catch (error) {
        res.status(500).send(error.message)
    }

}

const editUser = async (req,res) => {
    try{
        const id = req.params.id 
        const editedUser = await User.findByIdAndUpdate(id,{...req.body},{new:true})
        res.status(200).send(editedUser)
    }
    catch (error) {
        res.status(500).send(error.message)
    }

}
const deleteUser = async (req,res) => {
    try {
        const id = req.params.id 
        const deletedUser = await User.findByIdAndDelete(id)
        res.status(200).send(deletedUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = {addUser, getUsers ,getOneUser,editUser,deleteUser }