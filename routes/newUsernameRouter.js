const { Router } = require("express");
const usernameController = require("../controllers/usernameController");

const newUsernameRouter = Router();

newUsernameRouter.get("/", usernameController.createUsernameGet);

module.exports = newUsernameRouter;
