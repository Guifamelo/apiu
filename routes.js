const express = require("express")
const users = require("./controllers/users")
const routes = express.Router()
routes.post("/user" , users.store) // metodo dentro do arquido cdo controller.
routes.get("/user" , users.index)   // metodo dentro do arquido cdo controller.
routes.put("/user" , users.update)  // metodo dentro do arquido cdo controller.   MVC   
routes.delete("/user/:_id" , users.delete) 
module.exports = routes
