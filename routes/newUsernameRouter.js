const { Router } = require("express");

const newUsernameRouter = Router();

newUsernameRouter.get("/", (req, res) => {
    //res.render("pages/new", {  });
});

module.exports = newUsernameRouter;
