const Express_router = require("express").Router();
const Data_Router = require("./Data_Router");
const User_Router = require("./User_Router");

// forward to Data_Router
Express_router.use("/data", Data_Router);

// forward to User_Router
Express_router.use("/user", User_Router);

module.exports = Express_router;
