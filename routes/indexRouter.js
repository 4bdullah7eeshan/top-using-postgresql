const { Router } = require("express");
const usernameController = require("../controllers/usernameController");

const indexRouter = Router();

indexRouter.get("/", usernameController.getUsernames);

indexRouter.post("/new", usernameController.createUsernamePost);

module.exports = indexRouter;
