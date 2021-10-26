const { addUser, getUsers, getOneUser, editUser, deleteUser } = require("../control/userCtrl")

const router = require("express").Router()

router.post("/add",addUser)

router.get("/users",getUsers)

router.get("/users/:id",getOneUser)

router.put("/edit/:id",editUser)

router.delete("/delete/:id",deleteUser)


module.exports = router