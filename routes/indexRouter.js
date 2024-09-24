const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    //res.render("pages/index", {  });
    console.log("usernames will be logged here - wip")
});

indexRouter.post("/new", (req, res) => {
    //res.redirect("/");
    console.log("username to be saved: ", req.body.username)

});

module.exports = indexRouter;
